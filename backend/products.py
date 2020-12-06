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