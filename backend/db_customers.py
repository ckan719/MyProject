import psycopg2
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
                      customer.contact_title,customer.address, customer.city, customer.region,
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
            con.close()
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
