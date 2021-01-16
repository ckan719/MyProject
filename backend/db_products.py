import psycopg2
from products import products as pro


class products:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, products):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """INSERT INTO products (product_name, supplier_id, category_id,quantity_per_unit, unit_price ,
                                            units_in_stock, units_on_order, reorder_level, discontinued)
                                             VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
            result = (products.product_name, products.supplier_id, products.category_id,
                      products.quantity_per_unit, products.unit_price, products.units_in_stock,
                      products.units_on_order, products.reorder_level, products.discontinued)
            cur.execute(sql, result)
            con.commit()
            con.close()
            return "Insert Success!"

        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def delete(self, id):
        con = None

        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "DELETE FROM products where product_id = %s"
            cur.execute(sql, (id,))
            con.commit()
            con.close()
            return 'Delete Success! '
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, products):
        con = None

        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """UPDATE products SET product_name = %s, supplier_id = %s, category_id = %s,quantity_per_unit = %s, 
                    unit_price = %s,  units_in_stock = %s, units_on_order = %s, reorder_level = %s, 
                    discontinued = %s WHERE product_id = %s"""
            result = (products.product_name, products.supplier_id, products.category_id,
                      products.quantity_per_unit, products.unit_price, products.units_in_stock,
                      products.units_on_order, products.reorder_level, products.discontinued, products.product_id)
            cur.execute(sql, result)
            con.commit()
            con.close()
            return "Update Success !"

        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_all(self):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM products"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                p = pro()
                p.fetch_data(row)
                ans.append(p.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, products: pro):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM products WHERE product_id = %s"
            cur.execute(sql, (products.product_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = pro()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
