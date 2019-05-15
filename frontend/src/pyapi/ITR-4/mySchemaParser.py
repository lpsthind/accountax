from lxml import etree
from copy import copy
SCHEMA_SPACE = "{http://www.w3.org/2001/XMLSchema}"
# SCHEMA_SPACE="{http://incometaxindiaefiling.gov.in/master}"

class Schema:

    def __init__(self, schemafile):
        self.root = etree.parse(schemafile)

    def get_elm(self):
        # elm = [ b for b in self.root.iterfind(".//xs:element[@name='event']//".replace("xs:",SCHEMA_SPACE))]
        # attr = [ b.attrib for b in self.root.iterfind(".//xs:element[@name='event']//".replace("xs:",SCHEMA_SPACE))]
        elm = [ b for b in self.root.iterfind(".//xs:element//".replace("xs:",SCHEMA_SPACE))]
        attr = [ b.attrib for b in self.root.iterfind(".//xs:element//".replace("xs:",SCHEMA_SPACE))]
        for i in range(len(elm)):
            print(f"{elm[i].tag.replace(SCHEMA_SPACE,'')}\t{attr[i]}")

    def findall(self, path):
        return self.root.findall( path.replace("xs:", SCHEMA_SPACE) )

    def find(self, path):
        return self.root.find( path.replace("xs:", SCHEMA_SPACE) )

    def names_of(self, nodes):
        return [node.get("name") for node in nodes]

    def get_Types(self, t_name):
        return self.names_of( self.findall(t_name)) 
         
    def get_simpleTypes(self):
        return self.get_Types("xs:simpleType")

    def get_complexTypes(self):
        return self.get_Types("xs:complexType")

    def get_elements_of_attribute(self, attribute):
        return self.names_of(self.findall(".//xs:element/xs:complexType/xs:" + attribute + "/../.."))

    def get_element_attributes(self, name): 
        node = self.find(".//xs:element[@name='" + name + "']")
        if node is None:
            node = self.find(".//xs:complexType[@name='" + name + "']")

        if node is None:
            return None
        else:
            return node.attrib


if __name__ == '__main__':
        f = open("master.xsd",'r')
        schema = Schema(f)
        schema.get_elm()
        # print(f"get_simpleTypes(): {schema.get_simpleTypes()}")
        # print(f"get_complexTypes(): {schema.get_complexTypes()}")
        # print(f"get_elements_of_attribute('all'): {schema.get_elements_of_attribute('all')}")
        # print(f"get_element_attributes('source'): {schema.get_element_attributes('source')}")
