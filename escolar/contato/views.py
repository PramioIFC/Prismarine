import json

from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import ContactMessage


@csrf_exempt
def contact(request):
    if request.method != "POST":
        return JsonResponse({"error": "Método não permitido."}, status=405)

    try:
        payload = json.loads(request.body or "{}")
    except json.JSONDecodeError:
        return JsonResponse({"error": "JSON inválido."}, status=400)

    name = str(payload.get("nome", "")).strip()
    email = str(payload.get("email", "")).strip()
    message = str(payload.get("mensagem", "")).strip()
    errors = {}
    if len(name) < 2:
        errors["nome"] = "Informe seu nome."
    if not email:
        errors["email"] = "Informe seu e-mail."
    else:
        try:
            validate_email(email)
        except ValidationError:
            errors["email"] = "Informe um e-mail válido."
    if len(message) < 10:
        errors["mensagem"] = "A mensagem deve ter pelo menos 10 caracteres."
    if errors:
        return JsonResponse({"errors": errors}, status=400)

    saved = ContactMessage.objects.create(name=name, email=email, message=message)
    return JsonResponse({"ok": True, "id": saved.id}, status=201)
