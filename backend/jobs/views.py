from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()   # <-- Add this line
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Job.objects.all()

        title = self.request.query_params.get("title")
        location = self.request.query_params.get("location")
        job_type = self.request.query_params.get("job_type")
        mine = self.request.query_params.get("mine")

        if title:
            queryset = queryset.filter(title__icontains=title)

        if location:
            queryset = queryset.filter(location__icontains=location)

        if job_type:
            queryset = queryset.filter(job_type=job_type)

        if mine == "true":
            queryset = queryset.filter(created_by=self.request.user)

        return queryset

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)