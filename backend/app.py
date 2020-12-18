from flask import Flask, jsonify, request
import os
import db_customers as db_cus
import  customers as cus
import db_categories as db_cate
import  categories as cate
# minh
import db_employees as db_emp
import employees as emp


app = Flask(__name__)

dp_ip= os.getenv('dp_ip')
con_db = {}
con_db['user'] = 'postgres'
con_db['password'] = 'postgres'
con_db['host'] = str(dp_ip)
con_db['port'] = '5432'
con_db['database'] = 'northwind_db'

@app.route('/')
def hello_world():
    c1 = cate.categories(1, 'Beverages', 'Soft drinks, coffees, teas, beers, and ales', '')
    return str(c1.category_name + " | " + c1.description)
# categories
@app.route('/user/all_categories')
def all_categories():
    result = db_cate.categories(con_db).get_all()
    return jsonify(result), 200

@app.route('/user/one_categories/<int:cate_id>')
def one_categories():
    return jsonify(cate_id) , 200
    # c = cate.categories(category_id=cate_id)
    # rs = db_cate.categories(con_db).get_by_id(c)
    # if rs[1] != 200 :
    #     return jsonify({'message': rs[0]}), rs[1]
    # return jsonify(rs[0]), 200

@app.route('/delete_categories' , methods=['POST'])
def delete_categories():
    cn_db = db_cate.categories(con_db)
    data = request.json
    rs = cn_db.delete(data['category_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200

@app.route('/insert_categories' , methods=['POST'])
def insert_categories():
    cn_db = db_cate.categories(con_db)
    data = request.json
    cate1 = cate.categories(1,data['category_name'], data['description'], data['picture'])
    rs = cn_db.insert(cate1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200

@app.route('/update_categories' , methods=['POST'])
def update_categories():
    cn_db = db_cate.categories(con_db)
    data = request.json
    cate1 = cate.categories(data['category_id'],data['category_name'], data['description'], data['picture'])
    rs = cn_db.update(cate1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200
# ----------------------------------------------------

# customers
@app.route('/insert_customers' , methods=['POST'])
def insert_customers():
    cn_db = db_cus.customers(con_db)
    data = request.json
    cus1 = cus.customers(data['customer_id'],data['company_name'], data['contact_name'], data['contact_title'],
                         data['address'], data['city'], data['region'], data['postal_code'], data['country'],
                         data['phone'], data['fax'])
    rs = cn_db.insert(cus1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200
#-----------------------------------------------------


# employees minh
@app.route('/insert_employees' , methods=['POST'])
def insert_employees():
    cn_db = db_emp.employees(con_db)
    data = request.json
    emp1 = emp.employees(1,data['last_name'], data['first_name'], data['title'],
                         data['title_of_courtesy'], data['birth_date'], data['hire_date'], 
                         data['address'], data['city'],
                         data['region'], data['postal_code'],data['country'], 
                         data['home_phone'], data['extension'],
                         data['photo'], data['notes'], data['reports_to'], 
                         data['photo_path'])
    rs = cn_db.insert(emp1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200
@app.route('/update_employees' , methods=['POST'])
def update_employees():
    cn_db = db_emp.employees(con_db)
    data = request.json
    emp1 = emp.employees(data['employee_id'],data['last_name'], data['first_name'], data['title'],
                         data['title_of_courtesy'], data['birth_date'], data['hire_date'], 
                         data['address'], data['city'],
                         data['region'], data['postal_code'],data['country'], 
                         data['home_phone'], data['extension'],
                         data['photo'], data['notes'], data['reports_to'], 
                         data['photo_path'])
    rs = cn_db.update(emp1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200
    
@app.route('/user/all_employees')
def all_employees():
    result = db_emp.employees(con_db).get_all()
    return jsonify(result), 200

@app.route('/delete_employees' , methods=['POST'])
def delete_employees():
    cn_db = db_emp.employees(con_db)
    data = request.json
    rs = cn_db.delete(data['employee_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200

#----------------------------------------










@app.route('/test_send_receive', methods=['POST'])
def test_send_reseive():
    x = request.json['x']
    x += 1
    result = {}
    result['x'] = x
    return jsonify(result), 200

if __name__ == '__main__' :
    app.run(host='0.0.0.0', port=8080)