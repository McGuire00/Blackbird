from django.db import models


class Bill(models.Model):
    name = models.CharField(max_length=100)
