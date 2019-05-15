import os , django ,tqdm , sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE','backend.settings')
django.setup()





#### FAKE POP SCRIPT:
import random
from backendApp.models import ITClient as model
from faker import Faker

fake = Faker()


def FakePanUID(w):
    l = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    if w == "pan":
        pan = ""
        for i in range(0,10):
            if i == 3:
                pan += "P"
            elif i > 4 and i < 9:
                pan += str(random.randint(0,9))
            else:
                pan += l[random.randint(0,25)]
        return pan
    elif w == "adhar":
        adhar = ""
        for i in range(12):
            adhar += str(random.randint(0,9))
        return adhar


def CustomPopulate(n=10):
    count = 0
    queryset = model.objects.all().order_by("id")
    # pbar = tqdm.tqdm(total=len(queryset))

    for entry in queryset:  
        count += 1   
        entry.match = f"{entry.fname}{entry.mname}{entry.lname}".lower()
        entry.fullname = f"{entry.fname} {entry.mname} {entry.lname}".lower()
        entry.save()
        if count%1000 == 0 :
            print(count)
            
        # pbar.update(1)
    # pbar.close()

if __name__ == '__main__': 
    CustomPopulate()
    