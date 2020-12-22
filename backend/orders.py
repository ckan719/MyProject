class orders :
    def __init__(self, order_id ,customer_id , employee_id , order_date , required_date ,shipped_date,
                 ship_via, freight , ship_name , ship_address , ship_city ,ship_region ,ship_postal_code ,ship_country):
        self.order_id  = order_id
        self.customer_id  = customer_id
        self.employee_id  = employee_id
        self.order_date  = order_date
        self.required_date  = required_date
        self.shipped_date  = shipped_date
        self.ship_via  = ship_via
        self.freight  = freight
        self.ship_name  = ship_name
        self.ship_address  = ship_address
        self.ship_city  = ship_city
        self.ship_region  = ship_region
        self.ship_postal_code = ship_postal_code
        self.ship_country  = ship_country

    def fetch_data(self, data):
        self.order_id = data[0]
        self.customer_id = data[1]
        self.employee_id = data[2]
        self.order_date = data[3]
        self.required_date = data[4]
        self.shipped_date = data[5]
        self.ship_via = data[6]
        self.freight = data[7]
        self.ship_name = data[8]
        self.ship_address = data[9]
        self.ship_city = data[10]
        self.ship_region = data[11]
        self.ship_postal_code = data[12]
        self.ship_country = data[13]

    def to_json(self):
        return {
            'order_id': self.order_id,
            'customer_id': self.customer_id,
            'employee_id': self.employee_id,
            'order_date': self.order_date,
            'required_date': self.required_date,
            'shipped_date': self.shipped_date,
            'ship_via': self.ship_via,
            'freight': self.freight,
            'ship_name': self.ship_name,
            'ship_address': self.ship_address,
            'ship_city': self.ship_city,
            'ship_region': self.ship_region,
            'ship_postal_code': self.ship_postal_code,
            'ship_country': self.ship_country
        }
