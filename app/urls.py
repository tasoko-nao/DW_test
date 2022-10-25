from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('api/', include('app.urls_api'), name="api"),
]