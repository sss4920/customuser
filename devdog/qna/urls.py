from django.urls import path
from board import views


urlpatterns = [
    path('qna/',views.main, name='qnamain'),
]