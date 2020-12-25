import psycopg2
from customers import customers as cus


class customers:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, customer):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "INSERT INTO customers VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            result = (customer.customer_id, customer.company_name, customer.contact_name,
                      customer.contact_title, customer.address, customer.city, customer.region,
                      customer.postal_code, customer.country, customer.phone, customer.fax)
            cur.execute(sql, result)
            con.commit()
            con.close()
            return 'Insert Susscess!'
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
            sql = "DELETE FROM customers where customer_id = %s"
            cur.execute(sql, id)
            con.commit()
            con.close()
            return 'Delete Success!'
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, customer):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "UPDATE customers SET company_name = %s, contact_name = %s, contact_title = %s , address = %s , city = %s, region = %s, postal_code = %s, country = %s, phone = %s, fax = %s WHERE customer_id = %s"
            result = (
                customer.company_name, customer.contact_name, customer.contact_title, customer.address, customer.city,
                customer.region, customer.postal_code, customer.country, customer.phone, customer.fax,
                customer.customer_id)
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
            sql = "SELECT * FROM customers"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                c = cus()
                c.fetch_data(row)
                ans.append(c.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, customers: cus):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM categories WHERE category_id = %s"
            cur.execute(sql, (customers.customer_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = cus()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
