from rest_framework import serializers
from rest_framework.response import Response
from congress.models import Congress


class CongressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Congress
        fields = "__all__"
