from django.urls import path
from . import views

urlpatterns = [
    path('bord/', views.bord, name='bord'),
]