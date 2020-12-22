class order_details :
    def __init__(self,order_details_id, order_id , product_id, unit_price , quantity, discount ):
        self.order_details_id = order_details_id
        self.order_id  = order_id
        self.product_id  = product_id
        self.unit_price = unit_price
        self.quantity = quantity
        self.discount  = discount

    def fetch_data(self, data):
        self.order_details_id = data[0]
        self.order_id = data[1]
        self.product_id = data[2]
        self.unit_price = data[3]
        self.quantity = data[4]
        self.discount = data[5]

    def to_json(self):
        return {
            'order_details_id': self.order_details_id,
            'order_id': self.order_id,
            'product_id': self.product_id,
            'unit_price': self.unit_price,
            'quantity': self.quantity,
            'discount': self.discount
        }

        
