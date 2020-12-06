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

