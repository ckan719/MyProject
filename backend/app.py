from flask import Flask, jsonify, request
import os
import db_customers as db_cus
import  customers as cus
import db_categories as db_cate
import  categories as cate

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

@app.route('/test_send_receive', methods=['POST'])
def test_send_reseive():
    x = request.json['x']
    x += 1
    result = {}
    result['x'] = x
    return jsonify(result), 200

if __name__ == '__main__' :
    app.run(host='0.0.0.0', port=8080)