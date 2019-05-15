from django.db import models

# Create your models here.

class ITClient(models.Model):
    code = models.CharField(max_length=30)
    fname = models.CharField(max_length=120)
    mname = models.CharField(max_length=120)
    lname = models.CharField(max_length=120)
    pan = models.CharField(max_length=10)
    dob = models.DateTimeField()
    eFlPass = models.CharField(max_length=120)
    address1 = models.CharField(max_length=120)
    address2 = models.CharField(max_length=120)
    address3 = models.CharField(max_length=120)
    address4 = models.CharField(max_length=120)
    pincode = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    business_name = models.CharField(max_length=120)
    assesee_type = models.CharField(max_length=60)
    adhar = models.CharField(max_length=12)
    match = models.CharField(max_length=120)
    activeUser = models.CharField(max_length=120,default=None,null=True,blank=True)
    fullname = models.CharField(max_length=120)

    def save(self, *args, **kwargs):
        self.fullname = f"{self.fname} {self.mname} {self.lname}".lower()
        super(ITClient,self).save(*args, **kwargs)

    def __str__(self):
        return self.match


