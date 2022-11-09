from gradeApp import views
from django.urls import path

urlpatterns = [
    path('index', views.index, name='index'),
    path('assistente', views.assistente, name='assistente'),
    path('arquivo', views.arquivo, name='arquivo'),
    path('download', views.download, name='download'),
]