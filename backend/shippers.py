class shippers :
    def __init__(self, shipper_id , company_name , phone ):
        self.company_name  = company_name
        self.shipper_id = shipper_id
        self.phone  = phone

    def fetch_data(self, data):
        self.shipper_id = data[0]
        self.company_name = data[1]
        self.phone = data[2]

    def to_json(self):
        return {
            'shipper_id': self.shipper_id,
            'company_name': self.company_name,
            'phone': self.phone
        }
