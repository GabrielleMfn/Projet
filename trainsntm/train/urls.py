from django.contrib import admin
from django.urls import path

from  . import views

urlpatterns = [
    path('accueil/', views.accueil ,name= "accueil" ),
    path('liste/', views.liste, name = 'liste'), 
    path('detail/<trainsID>', views.detail, name = 'detail'),
    # Il faudra forcement qu'il y est un ID pour que la page spécifique s'affiche 
]
