from django.db import models
# Create your models here.

class User(models.Model):
    idNumber = models.CharField(max_length=10)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName + " " + self.lastName
    
class Record(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    timeIn = models.TimeField()
    timeOut = models.TimeField()

    def __str__(self):
        return self.user.firstName + " " + self.user.lastName + " " + str(self.date)    