import psycopg2
from suppliers import suppliers as sup


class suppliers:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, supplier):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """INSERT INTO suppliers (company_name ,contact_name,contact_title,address,
                                            city,region,postal_code,country,phone,fax,homepage) 
                                            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"""
            result = (supplier.company_name, supplier.contact_name, supplier.contact_title,
                      supplier.address, supplier.city, supplier.region,
                      supplier.postal_code, supplier.country, supplier.phone,
                      supplier.fax, supplier.homepage)
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
            sql = "DELETE FROM suppliers where supplier_id = %s"
            cur.execute(sql, (id,))
            con.commit()
            con.close()
            return 'Delete Success!'
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, supplier):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """UPDATE suppliers SET  company_name  = %s,contact_name = %s,contact_title = %s,address = %s,
                                            city = %s,region = %s,postal_code = %s,country = %s,phone = %s,
                                            fax = %s,homepage = %s
                                            WHERE supplier_id = %s"""
            result = (supplier.company_name, supplier.contact_name, supplier.contact_title,
                      supplier.address, supplier.city, supplier.region,
                      supplier.postal_code, supplier.country, supplier.phone,
                      supplier.fax, supplier.homepage, supplier.supplier_id)
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
            sql = "SELECT * FROM suppliers"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                c = sup()
                c.fetch_data(row)
                ans.append(c.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, suppliers: sup):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM suppliers WHERE supplier_id = %s"
            cur.execute(sql, (suppliers.suppliers_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = sup()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
