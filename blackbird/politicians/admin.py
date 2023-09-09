from django.contrib import admin
from .models import Senator, Representative, President, CabinetMember
# Register your models here.
MODELS = [Senator, Representative, President, CabinetMember]
admin.site.register(MODELS)
