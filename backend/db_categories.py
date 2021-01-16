import psycopg2
from categories import categories as cate


class categories:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, category):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "INSERT INTO categories (category_name, description, picture ) VALUES (%s,%s,%s)"
            result = (category.category_name, category.description, category.picture)
            cur.execute(sql, result)
            con.commit()
            con.close()
            return category.to_json()
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
            sql = "DELETE FROM categories where category_id = %s"
            cur.execute(sql, (id,))
            con.commit()
            con.close()
            return 'Delete Success!'
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, category):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "UPDATE categories SET category_name = %s, description = %s, picture = %s WHERE category_id = %s"
            result = (category.category_name, category.description, category.picture, category.category_id)
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
            sql = "SELECT * FROM categories ORDER BY category_id ASC"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                c = cate()
                c.fetch_data(row)
                ans.append(c.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, categories: cate):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM categories WHERE category_id = %s"
            cur.execute(sql, (categories.category_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = cate()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
