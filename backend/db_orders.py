import psycopg2
from orders import orders as od


class orders:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, orders):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """INSERT INTO orders (customer_id, employee_id, order_date,required_date, shipped_date,ship_via,
                                        freight,ship_name,ship_address,ship_city,ship_region,ship_postal_code,ship_country)
                                        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""

            result = (orders.customer_id, orders.employee_id, orders.order_date, orders.required_date,
                        orders.shipped_date,orders.ship_via,orders.freight,orders.ship_name,orders.ship_address,
                        orders.ship_city,orders.ship_region,orders,ship_postal_code,orders.ship_country)
            cur.execute(sql, result)
            con.commit()
            con.close()
            return 'Insert Success!'
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
            sql = "DELETE FROM orders where order_id = %s"
            cur.execute(sql, id)
            con.commit()
            con.close()
            return 'Delete Success!'
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, orders):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """UPDATE orders SET customer_id = %s, employee_id= %s order_date= %s,required_date= %s, shipped_date= %s,ship_via= %s,
                                        freight= %s,ship_name= %s,ship_address= %s,ship_city= %s,ship_region= %s,ship_postal_code= %s,ship_country= %s
                                        WHERE order_id = %s"""
            result = (orders.customer_id, orders.employee_id, orders.order_date, orders.required_date, 
                         orders.shipped_date, orders.ship_via, orders.freight,
                         orders.ship_name, orders.ship_address, orders.ship_city, orders.ship_region,
                         orders.ship_postal_code, orders.ship_country)
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
            sql = "SELECT * FROM orders"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                c = od()
                c.fetch_data(row)
                ans.append(c.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, orders: od):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM orders WHERE order_id = %s"
            cur.execute(sql, (orders.orders_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = od()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
