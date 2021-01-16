import psycopg2
from employees import employees as emp


class employees:
    def __init__(self, connect_db):
        self.connect_db = connect_db

    def insert(self, employee):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = "INSERT INTO employees (last_name, first_name, title, title_of_courtesy, birth_date, hire_date,address, city, region, postal_code, country, home_phone, extension, photo, notes, photo_path)" \
                  " VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            result = (
                employee.last_name, employee.first_name, employee.title, employee.title_of_courtesy,
                employee.birth_date,
                employee.hire_date, employee.address, employee.city, employee.region, employee.postal_code,
                employee.country, employee.home_phone, employee.extension, employee.photo, employee.notes,
                employee.photo_path)
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
            sql = "DELETE FROM employees where employee_id = %s"
            cur.execute(sql, (id,))
            con.commit()
            con.close()
            return 'Delete Success! '
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def update(self, employee):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])
            cur = con.cursor()
            sql = """UPDATE employees SET last_name = %s, first_name = %s, title = %s , title_of_courtesy = %s , 
                        birth_date = %s , hire_date = %s , address = %s , city = %s , region = %s , postal_code = %s ,
                        country = %s , home_phone = %s , extension = %s , photo = %s , notes = %s ,
                        photo_path = %s WHERE employee_id = %s"""
            result = (employee.last_name, employee.first_name, employee.title, employee.title_of_courtesy, 
                    employee.birth_date,employee.hire_date, employee.address, employee.city, employee.region, 
                    employee.postal_code, employee.country, employee.home_phone, employee.extension, employee.photo,
                    employee.notes, employee.photo_path, employee.employee_id)
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
            sql = "SELECT * FROM employees"
            cur.execute(sql)
            con.commit()
            rows = cur.fetchall()
            ans = []
            for row in rows:
                e = emp()
                e.fetch_data(row)
                ans.append(e.to_json())
            con.close()
            return ans
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()

    def get_by_id(self, employees: emp):
        con = None
        try:
            con = psycopg2.connect(user=self.connect_db['user'],
                                   password=self.connect_db['password'],
                                   host=self.connect_db['host'],
                                   port=self.connect_db['port'],
                                   database=self.connect_db['database'])

            cur = con.cursor()
            sql = "SELECT * FROM employees WHERE employee_id = %s"
            cur.execute(sql, (employees.employee_id,))
            con.commit()
            row = cur.fetchone()
            if row:
                c = emp()
                c.fetch_data(row)
                return c, 200
            con.close()
            return "ID not found", 404
        except (Exception, psycopg2.DatabaseError) as error:
            return str(error)
        finally:
            if con is not None:
                con.close()
