from django.urls import path, include
from . import views_api

urlpatterns = [
    path('saveImageClass/', views_api.saveImageClass, name="index"),
]