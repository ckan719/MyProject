class suppliers:
    def __init__(self, supplier_id=None, company_name=None, contact_name=None, contact_title=None,
                 address=None, city=None, region=None, postal_code=None, country=None, phone=None, fax=None,
                 homepage=None):
        self.supplier_id = supplier_id
        self.company_name = company_name
        self.contact_name = contact_name
        self.contact_title = contact_title
        self.address = address
        self.city = city
        self.region = region
        self.postal_code = postal_code
        self.country = country
        self.phone = phone
        self.fax = fax
        self.homepage = homepage

    def fetch_data(self, data):
        self.supplier_id = data[0]
        self.company_name = data[1]
        self.contact_name = data[2]
        self.contact_title = data[3]
        self.address = data[4]
        self.city = data[5]
        self.region = data[6]
        self.postal_code = data[7]
        self.country = data[8]
        self.phone = data[9]
        self.fax = data[10]
        self.homepage = data[11]

    def to_json(self):
        return {
            'supplier_id': self.supplier_id,
            'company_name': self.company_name,
            'contact_name': self.contact_name,
            'contact_title': self.contact_title,
            'address': self.address,
            'city': self.city,
            'region': self.region,
            'postal_code': self.postal_code,
            'country': self.country,
            'phone': self.phone,
            'fax': self.fax,
            'homepage': self.homepage
        }
