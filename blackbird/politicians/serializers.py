from rest_framework import serializers
from .models import Senator, Representative, President


class SenatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Senator
        fields = ("__all__")


class RepresentativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Representative
        fields = ("__all__")


class PresidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = President
        fields = ("__all__")