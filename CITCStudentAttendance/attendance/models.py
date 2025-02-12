from django.db import models
# Create your models here.

class User(models.Model):
    idNumber = models.CharField(max_length=30)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)

    def __str__(self):
        return self.firstName + " " + self.lastName
    
class Mode(models.Model):
    mode = models.CharField(max_length=10)

    def __str__(self):
        return self.mode
    
class Record(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    mode = models.ForeignKey(Mode, on_delete=models.CASCADE, null=True)
    dateTime = models.DateTimeField(null=True, blank=True)
    deviceName = models.CharField(max_length=255, null=True, blank=True)
    ipAddress = models.CharField(max_length=255, null=True, blank=True)
    remarks = models.TextField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.user.firstName + " " + self.user.lastName + " " + str(self.dateTime)