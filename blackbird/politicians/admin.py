from django.contrib import admin
from .models import Senator, Representative, President
# Register your models here.
MODELS = [Senator, Representative, President]
admin.site.register(MODELS)
