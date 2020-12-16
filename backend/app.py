from flask import Flask, jsonify, request
import os
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
@app.route('/insert_categories')
def insert_categories():
    cn_db = db_cate.categories(con_db)
    # data = request.json
    # cate1 = cate.categories(data['category_id'], data['category_name'], data['description'], data['picture'])
    cate1 = cate.categories(1, 'Beverages', 'Soft drinks, coffees, teas, beers, and ales', '')
    rs = cn_db.insert(cate1)
    return rs
@app.route('/test_send_receive', methods=['POST'])
def test_send_reseive():
    x = request.json['x']
    x += 1
    result = {}
    result['x'] = x
    return jsonify(result), 200

if __name__ == '__main__' :
    app.run(host='0.0.0.0', port=8080)