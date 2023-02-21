from django.db import models
import datetime


# Create your models here.

class Politician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField(max_length=8, null=True, blank=True)
    party = models.CharField(max_length=50)
    state = models.CharField(max_length=100)

    @property
    def age(self):
        return datetime.date.today() - self.date_of_birth
