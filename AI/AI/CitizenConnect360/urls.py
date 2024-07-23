from django.urls import  path
from . import views

urlpatterns=[
    path('', views.index, name='index'),
    path('incidents/', views.summarizeIncidents, name='summarizeIncidents'),
    path('views/', views.summarizeViews, name='summarizeViews')
]