from django.db import models
# Create your models here.

class User(models.Model):
    idNumber = models.CharField(max_length=10)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName + " " + self.lastName
    
class Date(models.Model):
    date = models.DateField()

    def __str__(self):
        return str(self.date)
    
class Record(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.ForeignKey(Date, on_delete=models.CASCADE)
    timeIn = models.TimeField()
    timeOut = models.TimeField()
    description = models.TextField(max_length=200)

    def __str__(self):
        return self.user.firstName + " " + self.user.lastName + " " + str(self.date)    