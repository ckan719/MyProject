from flask import Flask, jsonify, request
import os
# ++
import db_customers as db_cus
import customers as cus
# ++
import db_categories as db_cate
import categories as cate
# ++
import db_employees as db_emp
import employees as emp
# ++
import db_shippers as db_ship
import shippers as ship
# ++
import db_orders as db_od
import orders as od
# ++
import db_order_details as db_oddt
import order_details as oddt
# ++
import db_products as db_pro
import products as pro
# ++
import db_region as db_reg
import region as reg

import db_suppliers as db_sup
import suppliers as sup

app = Flask(__name__)

dp_ip = os.getenv('dp_ip')
con_db = {}
con_db['user'] = 'postgres'
con_db['password'] = 'postgres'
con_db['host'] = str(dp_ip)
con_db['port'] = '5432'
con_db['database'] = 'northwind_db'


@app.route('/')
def hello_world():
    return " <button> hello </button>"


# categories
@app.route('/user/all_categories')
def all_categories():
    result = db_cate.categories(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_categories/<int:cate_id>')
def one_categories(cate_id):
    c = cate.categories(category_id=cate_id)
    rs = db_cate.categories(con_db).get_by_id(c)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_categories', methods=['POST'])
def delete_categories():
    cn_db = db_cate.categories(con_db)
    data = request.json
    rs = cn_db.delete(data['category_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/insert_categories', methods=['POST'])
def insert_categories():
    cn_db = db_cate.categories(con_db)
    data = request.json
    cate1 = cate.categories(1, data['category_name'], data['description'], data['picture'])
    rs = cn_db.insert(cate1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_categories', methods=['POST'])
def update_categories():
    cn_db = db_cate.categories(con_db)
    data = request.json
    cate1 = cate.categories(data['category_id'], data['category_name'], data['description'], data['picture'])
    rs = cn_db.update(cate1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# ----------------------------------------------------

# customers
@app.route('/insert_customers', methods=['POST'])
def insert_customers():
    cn_db = db_cus.customers(con_db)
    data = request.json
    cus1 = cus.customers(data['customer_id'], data['company_name'], data['contact_name'], data['contact_title'],
                         data['address'], data['city'], data['region'], data['postal_code'], data['country'],
                         data['phone'], data['fax'])
    rs = cn_db.insert(cus1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_customers', methods=['POST'])
def update_customers():
    cn_db = db_cus.customers(con_db)
    data = request.json
    cus1 = cus.customers(data['customer_id'], data['company_name'], data['contact_name'], data['contact_title'],
                         data['address'], data['city'], data['region'], data['postal_code'], data['country'],
                         data['phone'], data['fax'])
    rs = cn_db.update(cus1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/delete_customers', methods=['POST'])
def delete_customers():
    cn_db = db_cus.customers(con_db)
    data = request.json
    rs = cn_db.delete(data['customer_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/user/all_customers')
def all_customers():
    result = db_cus.customers(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_customers/<int:cus_id>')
def one_customers(cus_id):
    c = cus.customers(customer_id=cus_id)
    rs = db_cus.customers(con_db).get_by_id(c)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


# -----------------------------------------------------


# employees minh
@app.route('/insert_employees', methods=['POST'])
def insert_employees():
    cn_db = db_emp.employees(con_db)
    data = request.json
    emp1 = emp.employees(1, data['last_name'], data['first_name'], data['title'],
                         data['title_of_courtesy'], data['birth_date'], data['hire_date'],
                         data['address'], data['city'],
                         data['region'], data['postal_code'], data['country'],
                         data['home_phone'], data['extension'],
                         data['photo'], data['notes'], 
                         data['photo_path'])
    rs = cn_db.insert(emp1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_employees', methods=['POST'])
def update_employees():
    cn_db = db_emp.employees(con_db)
    data = request.json
    emp1 = emp.employees(data['employee_id'], data['last_name'], data['first_name'], data['title'],
                         data['title_of_courtesy'], data['birth_date'], data['hire_date'],
                         data['address'], data['city'],
                         data['region'], data['postal_code'], data['country'],
                         data['home_phone'], data['extension'],
                         data['photo'], data['notes'],
                         data['photo_path'])
    rs = cn_db.update(emp1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/user/all_employees')
def all_employees():
    result = db_emp.employees(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_employees/<int:employee_id>')
def one_employees(employee_id):
    e = emp.employees(employee_id=employee_id)
    rs = db_emp.employees(con_db).get_by_id(e)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_employees', methods=['POST'])
def delete_employees():
    cn_db = db_emp.employees(con_db)
    data = request.json
    rs = cn_db.delete(data['employee_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# shippers +++++++++++++++++

@app.route('/user/all_shippers')
def all_shippers():
    result = db_ship.shippers(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_shippers/<int:shipper_id>')
def one_shippers(shipper_id):
    c = ship.shippers(shipper_id=shipper_id)
    rs = db_ship.shippers(con_db).get_by_id(c)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_shippers', methods=['POST'])
def delete_shippers():
    cn_db = db_ship.shippers(con_db)
    data = request.json
    rs = cn_db.delete(data['shipper_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/insert_shippers', methods=['POST'])
def insert_shippers():
    cn_db = db_ship.shippers(con_db)
    data = request.json
    ship1 = ship.shippers(1, data['company_name'], data['phone'])
    rs = cn_db.insert(ship1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_shippers', methods=['POST'])
def update_shippers():
    cn_db = db_ship.shippers(con_db)
    data = request.json
    ship1 = ship.shippers(data['shipper_id'], data['company_name'], data['phone'])
    rs = cn_db.update(ship1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# ----------------------------------------
# orders +++++++++++++++++

@app.route('/user/all_orders')
def all_orders():
    result = db_od.orders(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_orders/<int:order_id>')
def one_orders(order_id):
    c = od.orders(order_id=order_id)
    rs = db_od.orders(con_db).get_by_id(c)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_orders', methods=['POST'])
def delete_orders():
    cn_db = db_od.orders(con_db)
    data = request.json
    rs = cn_db.delete(data['order_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/insert_orders', methods=['POST'])
def insert_orders():
    cn_db = db_od.orders(con_db)
    data = request.json
    od1 = od.orders(1, data['customer_id'], data['employee_id'],
                    data['order_date'], data['required_date'], data['shipped_date'],
                    data['ship_via'], data['freight'], data['ship_name'],
                    data['ship_address'], data['ship_city'], data['ship_region'],
                    data['ship_postal_code'], data['ship_country'])
    rs = cn_db.insert(od1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_orders', methods=['POST'])
def update_orders():
    cn_db = db_od.orders(con_db)
    data = request.json
    od1 = od.orders(data['oder_id'], data['customer_id'], data['employee_id'],
                    data['order_date'], data['required_date'], data['shipped_date'],
                    data['ship_via'], data['freight'], data['ship_name'],
                    data['ship_address'], data['ship_city'], data['ship_region'],
                    data['ship_postal_code'], data['ship_country'])
    rs = cn_db.update(od1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# ----------------------------------------

# order_details
@app.route('/user/all_order_details')
def all_order_details():
    result = db_oddt.order_details(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_order_details/<int:order_details_id>')
def one_order_details(order_details_id):
    c = oddt.order_details(order_details_id=order_details_id)
    rs = db_oddt.order_details(con_db).get_by_id(c)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_order_details', methods=['POST'])
def delete_order_details():
    cn_db = db_oddt.order_details(con_db)
    data = request.json
    rs = cn_db.delete(data['order_details_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/insert_order_details', methods=['POST'])
def insert_order_details():
    cn_db = db_oddt.order_details(con_db)
    data = request.json
    oddt1 = oddt.order_details(1, data['order_id'], data['product_id'], data['unit_price'],
                               data['quantity'], data['discount'])
    rs = cn_db.insert(oddt1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_order_details', methods=['POST'])
def update_order_details():
    cn_db = db_oddt.order_details(con_db)
    data = request.json
    oddt1 = oddt.order_details(data['order_details_id'], data['order_id'], data['product_id'], data['unit_price'],
                               data['quantity'], data['discount'])
    rs = cn_db.update(oddt1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# --------------------------------------
# suppliers
@app.route('/user/all_suppliers')
def all_suppliers():
    result = db_sup.suppliers(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_suppliers/<int:supplier_id>')
def one_suppliers(supplier_id):
    c = sup.suppliers(supplier_id=supplier_id)
    rs = db_sup.suppliers(con_db).get_by_id(c)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_suppliers', methods=['POST'])
def delete_suppliers():
    cn_db = db_sup.suppliers(con_db)
    data = request.json
    rs = cn_db.delete(data['supplier_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/insert_suppliers', methods=['POST'])
def insert_suppliers():
    cn_db = db_sup.suppliers(con_db)
    data = request.json
    sup1 = sup.suppliers(1, data['company_name'], data['contact_name'], data['contact_title'],
                         data['address'], data['city'],
                         data['region'], data['postal_code'],
                         data['country'], data['phone'],
                         data['fax'], data['homepage'])
    rs = cn_db.insert(sup1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_suppliers', methods=['POST'])
def update_suppliers():
    cn_db = db_sup.suppliers(con_db)
    data = request.json
    sup1 = sup.suppliers(data['supplier_id'], data['company_name'], data['contact_name'], data['contact_title'],
                         data['address'], data['city'],
                         data['region'], data['postal_code'],
                         data['country'], data['phone'],
                         data['fax'], data['homepage'])
    rs = cn_db.update(sup1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200

    # ------------------------------------------------
    # products vuong


@app.route('/insert_products', methods=['POST'])
def insert_products():
    cn_db = db_pro.products(con_db)
    data = request.json
    pro1 = pro.products(1,data['product_name'], data['supplier_id'], data['category_id'],
                        data['quantity_per_unit'], data['unit_price'], data['units_in_stock'],
                        data['units_on_order'], data['reorder_level'], data['discontinued'])
    rs = cn_db.insert(pro1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_products', methods=['POST'])
def update_products():
    cn_db = db_pro.products(con_db)
    data = request.json
    pro1 = pro.products(data['product_id'], data['product_name'], data['supplier_id'], data['category_id'],
                        data['quantity_per_unit'], data['unit_price'], data['units_in_stock'],
                        data['units_on_order'], data['reorder_level'], data['discontinued'])
    rs = cn_db.insert(pro1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/user/all_products')
def all_products():
    result = db_pro.products(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_products/<int:product_id>')
def one_products(product_id):
    e = pro.products(product_id=product_id)
    rs = db_pro.products(con_db).get_by_id(e)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_products', methods=['POST'])
def delete_products():
    cn_db = db_pro.products(con_db)
    data = request.json
    rs = cn_db.delete(data['product_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# --------------------------------------------------------------

# region vuong

@app.route('/insert_region', methods=['POST'])
def insert_region():
    cn_db = db_reg.region(con_db)
    data = request.json
    reg1 = reg.region(1, data['region_description'])
    rs = cn_db.insert(reg1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/update_region', methods=['POST'])
def update_region():
    cn_db = db_reg.region(con_db)
    data = request.json
    reg1 = reg.region(data['region_description'])
    rs = cn_db.insert(reg1)
    result = {}
    result['message'] = rs
    return jsonify(result), 200


@app.route('/user/all_region')
def all_region():
    result = db_reg.region(con_db).get_all()
    return jsonify(result), 200


@app.route('/user/one_region/<int:region_id>')
def one_region(region_id):
    e = reg.region(region_id=region_id)
    rs = db_reg.region(con_db).get_by_id(e)
    if rs[1] != 200:
        return jsonify({'message': rs[0]}), rs[1]
    return jsonify(rs[0].to_json()), 200


@app.route('/delete_region', methods=['POST'])
def delete_region():
    cn_db = db_reg.region(con_db)
    data = request.json
    rs = cn_db.delete(data['product_id'])
    result = {}
    result['message'] = rs
    return jsonify(result), 200


# ====================================================

@app.route('/test_send_receive', methods=['POST'])
def test_send_reseive():
    x = request.json['x']
    x += 1
    result = {}
    result['x'] = x
    return jsonify(result), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
