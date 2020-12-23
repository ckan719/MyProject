import psycopg2
from shippers import shippers as ship


class shippers:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, shippers):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "INSERT INTO shippers (company_name, phone ) VALUES (%s,%s)"
            result = (shippers.company_name, shippers.phone)
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
            sql = "DELETE FROM shippers where shipper_id = %s"
            cur.execute(sql, id)
            con.commit()
            con.close()
            return 'Delete Success!'
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, shippers):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "UPDATE shippers SET company_name = %s, phone = %s WHERE shipper_id = %s"
            result = (shippers.company_name, shippers.phone, shippers.shipper_id)
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
            sql = "SELECT * FROM shippers"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                c = ship()
                c.fetch_data(row)
                ans.append(c.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, shippers: ship):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM shippers WHERE shipper_id = %s"
            cur.execute(sql, (shippers.shipper_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = ship()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
