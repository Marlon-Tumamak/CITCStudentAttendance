from django.urls import path
from .views import ListStudents, StudentsDetail, ListRecords, RecordsDetail

urlpatterns = [
    path('students/', ListStudents.as_view(), name='students-list'),
    path('students/<int:pk>/', StudentsDetail.as_view(), name='students-detail'),
    path('records/', ListRecords.as_view(), name='records-list'),
    path('records/<int:pk>/', RecordsDetail.as_view(), name='records-detail'),
]
