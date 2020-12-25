import requests


# ------------------------------------------------------------------------------------
# ----------------------------CATEGORIES-------------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang categories
# data = {}
# data['category_name'] = 'Bevera'
# data['description'] = 'Soft drinks, coffees, teas, beers, and ales'
# data['picture'] = ''
# report = requests.post('http://192.168.1.3:8080/insert_categories', json=data)
# print(report.text)

# Test delete  bang categories with ID
# data = {}
# data['category_id'] = '3'
# report = requests.post('http://192.168.1.13:8080/delete_categories', json=data)
# print(report.text)

# Test update bang categories
# data = {}
# data['category_id'] = '6'
# data['category_name'] = 'Beverages'
# data['description'] = 'Soft drinks, coffees, teas, beers, and ales'
# data['picture'] = ''
# report = requests.post('http://192.168.1.13:8080/update_categories', json=data)
# print(report.text)

 #------------------------------------------------------------------------------------
# ----------------------------CUSTOMERS-------------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang customers
# data = {}
# data['customer_id'] = 'ALFKI'
# data['company_name'] = 'Alfreds Futterkiste'
# data['contact_name'] = 'Maria Anders'
# data['contact_title'] = 'Sales Representative'
# data['address'] = 'Obere Str. 57'
# data['city'] = 'Berlin'
# data['region'] = 'NULL'
# data['postal_code'] = '12209'
# data['country'] = 'Germany'
# data['phone'] = '030-0074321'
# data['fax'] = '030-0076545'
# report = requests.post('http://localhost:8080/insert_customers', json=data)
# print(report.text)

# ------------------------------------------------------------------------------------
# -----------------------------EMPLOYEES------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang employees
# data = {}
# data['last_name'] = 'Fuller'
# data['first_name'] = 'Andrew'
# data['title'] = 'Vice President, Sales'
# data['title_of_courtesy'] = 'Dr.'
# data['birth_date'] = '1952-02-19'
# data['hire_date'] = '1992-08-14'
# data['address'] = '908 W. Capital Way'
# data['city'] = 'Tacoma'
# data['region'] = 'WA'
# data['postal_code'] = '98401'
# data['country'] = 'USA'
# data['home_phone'] = '(206) 555-9482'
# data['extension'] = '457'
# data['photo'] = ''
# data['notes'] = 'Andrew received his BTS commercial in 1974'
# data['reports_to'] = '1'
# data['photo_path'] = ''
# report = requests.post('http://localhost:8080/insert_employees', json=data)
# print(report.text)

# test update EMPLOYEE
# data['employee_id'] = '1'
# data['last_name'] = 'Fuller-Fuller-Fuller'
# data['first_name'] = 'Andrew'
# data['title'] = 'Vice President, Sales'
# data['title_of_courtesy'] = 'Dr.'
# data['birth_date'] = '1952-02-19'
# data['hire_date'] = '1992-08-14'
# data['address'] = '908 W. Capital Way'
# data['city'] = 'Tacoma'
# data['region'] = 'WA'
# data['postal_code'] = '98401'
# data['country'] = 'USA'
# data['home_phone'] = '(206) 555-9482'
# data['extension'] = '63457'
# data['photo'] = '\x'
# data['notes'] = 'Andrew received his BTS commercial in 1974'
# data['reports_to'] = ''
# data['photo_path'] = 'http://accweb/emmployees/fuller.bmp'
# report = requests.post('http://192.168.1.189:8080/update_employees', json=data)
# print(report.text)

# test delete EMPLOYEE
# data['employee_id'] = '1'
# report = requests.post('http://192.168.1.189:8080/delete_employees', json=data)
# print(report.text)

# test get EMPLOYEE
#


# ------------------------------------------------------------------------------------
# -----------------------------SUPPLIERS------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang suppliers
# data = {}
# data['company_name'] = 'Exotic Liquids'
# data['contact_name'] = 'Charlotte Cooper'
# data['contact_title'] = 'Purchasing Manager'
# data['address'] = '49 Gilbert St.'
# data['city'] = 'London'
# data['region'] = ''
# data['postal_code'] = 'EC1 4SD'
# data['country'] = 'UK'
# data['phone'] = '(171) 555-2222'
# data['fax'] = ''
# data['homepage'] = ''
# report = requests.post('http://localhost:8080/insert_suppliers', json=data)
# print(report.text)

# ------------------------------------------------------------------------------------
# -----------------------------Product------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang product
# data = {}
# data['product_name'] = "Chai"
# data['supplier_id'] = '1'
# data['category_id'] = '1'
# data['quantity_per_unit'] = '10 boxes x 30 bags'
# data['unit_price'] = '18'
# data['units_in_stock'] = '39'
# data['units_on_order'] = '0'
# data['reorder_level'] = '10'
# data['discontinued'] = '1'
# report = requests.post('http://localhost:8080/insert_products', json=data)
# print(report.text)

# ------------------------------------------------------------------------------------
# -----------------------------Shipers------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang shipers
# data = {}
# data['company_name'] = "Speedy Express"
# data['phone'] = '(503) 555-9831'
# report = requests.post('http://localhost:8080/insert_shippers', json=data)
# print(report.text)
# data1 = {}
# data1['company_name'] = "United Package"
# data1['phone'] = '(503) 555-3199'
# report = requests.post('http://localhost:8080/insert_shippers', json=data1)
# print(report.text)

# ------------------------------------------------------------------------------------
# -----------------------------Order------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang Order
# data = {}
# data['customer_id'] = "ALFKI"
# data['employee_id'] = '1'
# data['order_date'] = '1996-07-04'
# data['required_date'] = '1996-08-01'
# data['shipped_date'] = '1996-07-16'
# data['ship_via'] = '1'
# data['freight'] = '32.3800011'
# data['ship_name'] = 'Vins et alcools Chevalier'
# data['ship_address'] = '59 rue de l'
# data['ship_city'] = 'Reims'
# data['ship_region'] = ''
# data['ship_postal_code'] = '51100'
# data['ship_country'] = 'France'
# report = requests.post('http://localhost:8080/insert_orders', json=data)
# print(report.text)



# ------------------------------------------------------------------------------------
# -----------------------------Orders_detail------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang Orders_detail
# data = {}
# data['order_id'] = "1"
# data['product_id'] = '1'
# data['unit_price'] = '14'
# data['quantity'] = '12'
# data['discount'] = '0'
# report = requests.post('http://localhost:8080/insert_order_details', json=data)
# print(report.text)




# Test giao tiep
# data = {}
# data['x'] = 7
# report = requests.post('http://192.168.1.13:8080/test_send_receive', json=data)
# print(report.text)
