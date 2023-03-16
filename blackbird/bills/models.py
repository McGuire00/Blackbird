from django.db import models


class Bill(models.Model):
    name = models.CharField(max_length=100)
    sponsor = models.OneToOneField(
        "politicians.Representative",
        on_delete=models.CASCADE,
        primary_key=True,
    )
