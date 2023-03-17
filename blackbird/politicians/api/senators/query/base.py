from rest_framework import viewsets
from politicians.models import Senator
from rest_framework import serializers
from rest_framework.response import Response


class SenatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Senator
        fields = "__all__"


class SenatorViewSet(viewsets.ModelViewSet):
    queryset = Senator.objects.all()
    serializer_class = SenatorSerializer

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
