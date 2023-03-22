from django.db import models


class Congress(models.Model):
    congress = models.CharField(max_length=25)
    first_session = models.CharField(max_length=50)
    second_session = models.CharField(max_length=50)
