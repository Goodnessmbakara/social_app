from django.urls import path
from .views import chat, MessageAPIView

urlpatterns = [
  path('chat/', chat, name='chat'),
  path('messages/', MessageAPIView.as_view(), name='messages'),]