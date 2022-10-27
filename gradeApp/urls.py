from gradeApp import views
from django.urls import path

urlpatterns = [
    path('index', views.index, name='index'),
    path('assistente', views.assistente, name='assistente'),
]