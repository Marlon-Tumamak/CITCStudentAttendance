from django.shortcuts import render
from .serializers import UserSerializer, RecordSerializer
from .models import User, Record

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

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

