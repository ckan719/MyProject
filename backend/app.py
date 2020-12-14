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
    c1 = cate.categories(1, 'name', 'dip', '')
    return c1.category_name
@app.route('/insert_categories', method = ['POST'])
def insert_categories():
    cn_db = db_cate.categories(con_db)
    # data = request.json
    # cate1 = cate.categories(data['category_id'], data['category_name'], data['description'], data['picture'])
    cate1 = cate.categories(1, 'cate_name', 'descri', '')
    rs = cn_db.insert(cate1)
    return rs

if __name__ == '__main__' :
    app.run(host='0.0.0.0', port=8080)