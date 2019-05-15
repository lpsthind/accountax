import os , django ,tqdm , sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE','backend.settings')
django.setup()





#### FAKE POP SCRIPT:
import random
from backendApp.models import ITClient as model
from faker import Faker

fake = Faker()

def DeleteTableData(m):
        m.objects.all().delete()
        print("Done")


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


def populate(n=5):
    pbar = tqdm.tqdm(total=n)
    count = 0
    for entry in range(n):
        count += 1
        ## GET OTHER FAKE DATA
        code = count
        fname = fake.first_name()
        mname = fake.last_name()
        lname = fake.last_name()
        email = fake.email()
        pan = FakePanUID("pan")
        dob = fake.date()
        eFlPass = f"{fname[0].capitalize()}{lname.lower()}@1995"
        address1 = fake.building_number()
        address2 = fake.street_name()
        address3 = fake.secondary_address()
        address4 = "kapurthala Punjab"
        pincode = "144620"
        phone = fake.msisdn()
        email = fake.email()
        business_name = "Harley MDChor"
        assesee_type = "Individual"
        adhar = FakePanUID("adhar")
        match = f"{fname.lower()}{mname.lower()}{lname.lower()}|{pan.lower()}"

        ## CREATE FAKE USER ENTRY
        cleint_data = model.objects.get_or_create(
                                                code = f"{pan}-{count}",
                                                fname = fname,
                                                mname = mname,
                                                lname = lname,
                                                pan = pan,
                                                dob = dob,
                                                eFlPass = eFlPass,
                                                address1 = address1,
                                                address2 = address2,
                                                address3 = address3,
                                                address4 = address4,
                                                pincode = pincode,
                                                phone = phone,
                                                email = email,
                                                business_name = business_name,
                                                assesee_type = assesee_type,
                                                adhar = adhar,
                                                match =match
                                        )[0]
        cleint_data.save()

        # print(f"{count}--> {fname}||{lname}||{email}||{match}")
        pbar.update(1)
        # print(dob,eFlPass)
    pbar.close() 






if __name__ == '__main__': 
    try:
        populate(int(sys.argv[1]))
    except IndexError:
        print(f"run command----> bash$ python {__file__} < No. of counts >")
    ### DeleteTableData(model)
    