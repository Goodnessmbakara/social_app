from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView, Response
from . pusher import   pusher_client

def chat(request):
   users = User.objects.all()
   return render(request, 'chat.html', {'users': users})

class MessageAPIView(APIView):
   def post(self, request):
      pusher_client.trigger('chat', 'message', {
         'username': request.data['username'],
         'message': request.data['message']
      })

      return Response([])
