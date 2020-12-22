class products :
    def __init__(self, product_id , product_name , supplier_id , category_id , quantity_per_unit ,
                 unit_price , units_in_stock , units_on_order , reorder_level , discontinued ):
        self.product_id = product_id
        self.product_name = product_name
        self.supplier_id = supplier_id
        self.category_id = category_id
        self.quantity_per_unit = quantity_per_unit
        self.unit_price = unit_price
        self.units_in_stock = units_in_stock
        self.units_on_order = units_on_order
        self.reorder_level = reorder_level
        self.discontinued = discontinued
        
    def fetch_data(self, data):
        self.product_id = data[0]
        self.product_name = data[1]
        self.supplier_id = data[2]
        self.category_id = data[3]
        self.quantity_per_unit = data[4]
        self.unit_price = data[5]
        self.units_in_stock = data[6]
        self.units_on_order = data[7]
        self.reorder_level = data[8]
        self.discontinued = data[9]
    
    def to_json(self):
        return {
            'product_id':self.product_id,
            'product_name':self.product_name,
            'supplier_id':self.supplier_id,
            'category_id':self.category_id,
            'quantity_per_unit': self.quantity_per_unit,
            'unit_price':self.unit_price,
            'units_in_stock':self.units_in_stock,
            'units_on_order':self.units_on_order,
            'reorder_level':self.reorder_level,
            'discontinued':self.discontinued
        }