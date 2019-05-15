import sys

try:
    print(int(sys.argv[1]))
except:
    print(f"run command----> bash$ python {__file__} < No. of counts >")

