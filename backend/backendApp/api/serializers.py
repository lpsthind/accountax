from rest_framework import serializers
from backendApp.models import ITClient


class ITClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = ITClient
        fields = ('id','code', 'activeUser' ,'match','fname','mname','lname','pan','dob',
        			'eFlPass','address1','address2','address3','address4','pincode','phone',
        			'email','business_name','assesee_type','adhar', 'fullname'
        		)

class ITClientSerializerFilter(serializers.ModelSerializer):
    class Meta:
        model = ITClient
        fields = ('id','code','match','fname','mname','lname','pan' , 'activeUser', 'fullname')
