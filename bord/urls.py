from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.home, name='home'),
    path('bord/', views.bord, name='bord'),
    path('view/', views.view, name='view'),
    path('write/', views.write, name='write'),
    
    
]