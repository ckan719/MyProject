import psycopg2


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
                                   database=self.connect_db['dp_ip'])

            cur = con.cursor()
            sql = "INSERT INTO categories(category_name,description,picture) VALUES (%s,%s,%s)"
            result = ( category.category_name, category.description, category.picture)
            cur.execute(sql, result)
            con.commit()
            con.close()
            return 'Insert Susscess!'

        except (Exception, psycopg2.DatabaseError) as error:
            return 'Insert fail'

    def get_all(self):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['dp_ip'])

            cur = con.cursor()
            sql = "SELECT * FROM categories"
            cur.execute(sql)
            con.commit()
            con.close()
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
