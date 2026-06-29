from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from accounts.views import UserViewSet, RegisterView
from jobs.views import JobViewSet
from applications.views import ApplicationViewSet

from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"jobs", JobViewSet)
router.register(r"applications", ApplicationViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/register/", RegisterView.as_view(), name="register"),

    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    path("api/", include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)