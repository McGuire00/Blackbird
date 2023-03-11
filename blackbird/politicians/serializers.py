from rest_framework import serializers
from .models import Senator, Representative, President


class SenatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Senator
        fields = ("__all__")