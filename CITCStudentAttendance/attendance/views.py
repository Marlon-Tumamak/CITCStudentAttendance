from django.shortcuts import render
from .serializers import UserSerializer, RecordSerializer, ModeSerializer
from .models import User, Record, Mode

from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView

class ListStudents(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class StudentsDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer    

class ListRecords(ListCreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

class RecordsDetail(RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer    

class UserRecordsList(ListAPIView):
    serializer_class = RecordSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Record.objects.filter(user_id=user_id)
    
class ModeList(ListCreateAPIView):
    queryset = Mode.objects.all()
    serializer_class = ModeSerializer
    
class ModeDetail(RetrieveUpdateDestroyAPIView):
    queryset = Mode.objects.all()
    serializer_class = ModeSerializer