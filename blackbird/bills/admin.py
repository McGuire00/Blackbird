from django.contrib import admin
from .models import Bill

MODELS = [Bill]
admin.site.register(MODELS)
