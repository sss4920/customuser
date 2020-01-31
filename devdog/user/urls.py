from django.urls import path,include
from user import views

app_name = 'user'

urlpatterns = [
    path('signup/',views.signup, name='signup'),
    path('signin/',views.signin, name='signin'),
    path('',include('django.contrib.auth.urls')),
]