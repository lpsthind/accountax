import xmlschema
from pprint import pprint

schema = xmlschema.XMLSchema('/home/lpsthind/Public/python_web_dev/09_other/08_react_js/taxapp/frontend/src/pyapi/master.xsd')
print(schema.types)
# NamespaceView({'vehicleType': XsdComplexType(name='vehicleType')})
pprint(dict(schema.elements))

# {'bikes': XsdElement(name='vh:bikes', occurs=[1, 1]),
#  'cars': XsdElement(name='vh:cars', occurs=[1, 1]),
#  'vehicles': XsdElement(name='vh:vehicles', occurs=[1, 1])}

print(schema.attributes)
# NamespaceView({'step': XsdAttribute(name='vh:step')})