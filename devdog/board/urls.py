from django.urls import path
from board import views

app_name = 'board'

urlpatterns = [
    # path('article/',views.main, name='boardmain'),
    path('article/',views.read, name='read'),
    path('article/new/',views.create, name='create'),
    # path('article/create/<int:pagenum>/', views.create, name='create'),
    path('article/<int:article_id>/',views.detail, name='detail'),
    # path('article/<int:article_id>/new/'views.comment, name='comment'),
]