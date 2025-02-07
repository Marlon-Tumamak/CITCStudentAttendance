from django.shortcuts import render
from .serializers import UserSerializer, RecordSerializer
from .models import User, Record

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