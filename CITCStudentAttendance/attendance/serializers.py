from rest_framework import serializers
from .models import User, Record, Mode

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mode
        fields = '__all__'

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        
        # Full details of the user foreign key
        if instance.user:
            representation['user'] = {
                "id": instance.user.id,
                "idNumber": instance.user.idNumber,
                "firstName": instance.user.firstName,
                "lastName": instance.user.lastName
            }
        else:
            representation['user'] = None  # Handle null case
        
        # Full details of the mode foreign key
        if instance.mode:
            representation['mode'] = {
                "id": instance.mode.id,
                "mode": instance.mode.mode
            }
        else:
            representation['mode'] = None  # Handle null case

        return representation
    
class ModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mode
        fields = '__all__'    
