class customers:
    def __init__(self, customer_id = None, company_name = None, contact_name = None, contact_title = None,
                 address = None, city = None, region = None, postal_code = None, country = None, phone = None, fax = None):
        self.customer_id = customer_id
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

    def fetch_data(self, data):
        self.customer_id = data[0]
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

    def to_json(self):
        return {
            'customer_id': self.customer_id,
            'company_name': self.company_name,
            'contact_name': self.contact_name,
            'contact_title': self.contact_title,
            'address': self.address,
            'city': self.city,
            'region': self.region,
            'postal_code': self.postal_code,
            'country': self.country,
            'phone': self.phone,
            'fax': self.fax
        }
