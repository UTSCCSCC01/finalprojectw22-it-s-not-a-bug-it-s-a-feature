from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('signup/', views.signup, name='signup'),
    path('hello/<str:name>/', views.hello, name='hello'),
]