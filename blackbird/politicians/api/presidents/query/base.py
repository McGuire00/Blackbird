from rest_framework import viewsets
from politicians.models import President
from rest_framework import serializers
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class PresidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = President
        fields = "__all__"


class PresidentViewSet(viewsets.ModelViewSet):
    queryset = President.objects.all()
    serializer_class = PresidentSerializer

    def list(self, request):
        serializer = PresidentSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        president = get_object_or_404(self.queryset, pk=pk)
        serializer = PresidentSerializer(president)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass

