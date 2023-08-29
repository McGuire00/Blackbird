from django.db import models
import datetime


class Politician(models.Model):
    name = models.CharField(max_length=100)
    # date_of_birth = models.DateField(max_length=8, null=True, blank=True)
    party = models.CharField(max_length=50)
    state = models.CharField(max_length=100)
    image = models.ImageField(upload_to='politician_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        abstract = True

    @property
    def age(self):
        return datetime.date.today() - self.date_of_birth


class Senator(Politician):
    pass


class Representative(Politician):
    district = models.CharField(max_length=4)


class President(Politician):
    pass
