from django.urls import path, include
from . import views_api

urlpatterns = [
    path('returnImageClass/', views_api.returnImageClass, name="api_returnClass"),
    path('saveImageClass/', views_api.saveImageClass, name="api_saveClass"),
]