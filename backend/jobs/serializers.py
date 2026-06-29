from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source="created_by.username")

    class Meta:
        model = Job
        fields = "__all__"