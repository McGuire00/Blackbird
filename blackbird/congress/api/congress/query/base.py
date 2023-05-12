from rest_framework import serializers
from rest_framework import viewsets
from rest_framework.response import Response
from congress.models import Congress
from django.shortcuts import get_object_or_404


class CongressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Congress
        fields = "__all__"


class CongressViewSet(viewsets.ModelViewSet):
    queryset = Congress.objects.all()
    serializer_class = CongressSerializer

    def list(self, request):
        serializer = CongressSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        president = get_object_or_404(self.queryset, pk=pk)
        serializer = CongressSerializer(president)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
