from django.contrib import admin

from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    # Colunas e filtros usados para consultar mensagens no painel administrativo.
    list_display = ("name", "email", "created_at")
    list_filter = ("created_at",)
    search_fields = ("name", "email", "message")
    # As mensagens são consultadas no painel, mas não editadas por ele.
    readonly_fields = ("name", "email", "message", "created_at")
