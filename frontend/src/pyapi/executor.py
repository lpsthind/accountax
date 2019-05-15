import xmltodict
import os, json

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

def xml_to_json():
	# xml_file = open(f"{os.getcwd()}/itr.xml", "r").read() 
	xml_file = open(f"{os.getcwd()}/master.xsd", "r").read()
	json_file = open('itr.json', 'w') 
	json.dump(xmltodict.parse(xml_file),json_file,indent=4)
	print("Xml > Json: Done")

def json_to_xml():
	json_file = json.load(open(f"{os.getcwd()}/itr.json", "r")) 
	xml_file = open('mymade.xml', 'w') 
	xml_file.write(xmltodict.unparse(json_file, pretty=True, indent="    "))
	print("Json > Xml: Done")	

if __name__ == "__main__":
	xml_to_json()
	json_to_xml()
	# local_json_to_xml()