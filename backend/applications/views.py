from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Application
from .serializers import ApplicationSerializer


class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]
    queryset = Application.objects.all()

    def get_queryset(self):
        queryset = Application.objects.all()

        mine = self.request.query_params.get("mine")

        if mine == "true":
            queryset = queryset.filter(applicant=self.request.user)

        return queryset

    def perform_create(self, serializer):
        serializer.save(applicant=self.request.user)