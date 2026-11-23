from django.db import models


class ContactMessage(models.Model):
    # Dados enviados pela pessoa que preencheu o formulário.
    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()
    # Django registra automaticamente quando a mensagem foi recebida.
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Mostra primeiro as mensagens recebidas mais recentemente.
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} <{self.email}>"
