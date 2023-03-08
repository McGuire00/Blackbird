from django.db import models
from ..politicians.models import Representative


class Bill(models.Model):
    name = models.CharField(max_length=100)
    sponsor = models.OneToOneField(
        Representative,
        on_delete=models.CASCADE,
        primary_key=True,
    )
