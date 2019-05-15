import xmlschema
from pprint import pprint

schema = xmlschema.XMLSchema10('/home/lpsthind/Public/python_web_dev/09_other/08_react_js/taxapp/frontend/src/pyapi/ITR-4/master.xsd')
pprint(dict(schema.types))
# print(schema.elements['StateCode'])
# print(schema.elements['StateCode'].occurs)
# pprint(dict(schema.elements))
# pprint(sorted(schema.maps.types.keys())[:5])
# print(schema.elements['AddressDetail'])
print(schema.types['AddressDetail80G'])
# pprint(schema.findall('AddressDetail/*'))
# print(schema.attributes)
