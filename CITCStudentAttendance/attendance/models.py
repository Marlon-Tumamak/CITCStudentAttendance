from django.db import models
# Create your models here.

class User(models.Model):
    idNumber = models.CharField(max_length=20)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName + " " + self.lastName
    
class Date(models.Model):
    date = models.DateField()

    def __str__(self):
        return str(self.date)
    
class Record(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    date = models.DateField(null=True, blank=True)
    timeIn = models.TimeField(null=True, blank=True)
    timeOut = models.TimeField(null=True, blank=True)
    description = models.TextField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.user.firstName + " " + self.user.lastName + " " + str(self.date)    