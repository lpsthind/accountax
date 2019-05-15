import xmltodict
import os, json, pprint

def local_json_to_xml():
	mydict = {
		'Form61': {
			'@color':'red',
			'@stroke':'2',
			'person xs:form61':{
				'@xs':'person',
				'name':{
					'@xs':'pname',
					'#text':'Lovepreet Singh'
				},
				'pan xs:form61':{
					'@xs':'ppan',
					'#text':'GGGPS0590K'
				},
				'phone xs:form61':{
					'@xs':'pphone',
					'#text':'6284419736'
				},
				'email xs:form61':{
					'@xs':'pemail',
					'#text':'love22thind@gmail.com'
				}
			}
		}
	}
	print(xmltodict.unparse(mydict,pretty=True))

def fetch_data(jjson):
	astrik = "********************************************************************************************************************************************"
	for key in jjson:
		lst = []
		print(f"\n{key['@name']} | {astrik}")
		for k in key:
			xsd_complex = get_complex(k,key)
			if not xsd_complex in [None,'passon']: 
				if 'xs:sequence' in xsd_complex:
					if 'xs:element' in xsd_complex['xs:sequence']:							
						data = xsd_complex['xs:sequence']['xs:element']
						if type(data) == list:
							for item in data:
								if '@name' in item:
									print(f"{item['@name']}-->{item}")
								elif '@ref' in item:
									print(f"{item['@ref']}-->{item}")
						elif type(data) == dict:
							for item in data:
								print(f"{data[item]}")	

def get_complex(k,key):
	if type(k) == str:
		if k == 'xs:complexType':
			return key[k]
	elif type(k) == dict:
		for key in k:
			if key == "xs:complexType":
				return k['xs:complexType'] 
	else:
		return "passon"

def get_sequence():
	return None

def get_element():
	return None

def get_simple():
	return None

def process_dict(jjson):
	fetch_data(jjson)
	print(type(jjson))

			# lst = [node for node in key['xs:complexType']['xs:sequence']['xs:element']]			
			# print(f"\n{key['@name']}:")
			# for item in lst:
			# 	print(f"{item}")
		# except:
			# lst = [ node for node in key['xs:simpleType']['xs:restriction']['xs:enumeration']]
			# print(lst)
		# try:
		# 	typeof = [ type(node) for node in key['xs:complexType']['xs:sequence']['xs:element']]
		# 	if typeof[0] == str:
		# 		print(f"{key['@name']} | {astrik}{[(node) for node in key['xs:complexType']['xs:sequence']['xs:element']['xs:complexType']['xs:sequence']['xs:element']]}\n\n") 
		# 	else:
		# 		print(f"{key['@name']} | {astrik}{[ (node) for node in key['xs:complexType']['xs:sequence']['xs:element']]}\n\n")			
		# except:
		# 	print(f"{key['@name']} | {astrik}{[ node for node in key['xs:simpleType']['xs:restriction']['xs:enumeration']]}\n\n")



def xml_to_json_local():
	file = "master"
	xml_file = open(f"{os.getcwd()}/{file}.xsd", "r").read()
	obj = xmltodict.parse(xml_file,process_namespaces=False)
	obj_slice = obj["xs:schema"]
	jjson = json.loads(json.dumps(obj_slice))
	jjson = jjson["xs:element"]
	process_dict(jjson)
	# print(json.dumps(jjson,indent=2))

def xml_to_json():
	file = "master"
	xml_file = open(f"{os.getcwd()}/{file}.xsd", "r").read()
	json_file = open(f'{file}.json', 'w') 
	json.dump(xmltodict.parse(xml_file),json_file,indent=2)
	print("Xml > Json: Done")

def json_to_xml():
	json_file = json.load(open(f"{os.getcwd()}/itr.json", "r")) 
	xml_file = open('mymade.xml', 'w') 
	xml_file.write(xmltodict.unparse(json_file, pretty=True, indent="  "))
	print("Json > Xml: Done")	

if __name__ == "__main__":
	# xml_to_json()
	xml_to_json_local()
	# json_to_xml()
	# local_json_to_xml()