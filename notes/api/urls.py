from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoute, name="get_route"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/new', views.createNote, name="create_note"),
    path('notes/update/<str:pk>', views.updateNote, name="update_note"),
    path('notes/delete/<str:pk>', views.deleteNode, name="delete_note"),
    path('notes/<str:pk>', views.getNote, name="note")
]
