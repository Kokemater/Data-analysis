from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ejecutar/', views.ejecutar_codigo, name='ejecutar_codigo'),
    path('comprobar/', views.comprobar_numero, name='comprobar_numero'),
    path('obtener-hora/', views.obtener_hora, name='obtener_hora'),

]
