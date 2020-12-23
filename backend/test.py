import requests

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
# report = requests.post('http://192.168.1.27:8080/insert_employees', json=data)
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
# ------------------------------------------------------------------------------------
# ----------------------------CATEGORIES-------------------------------------------
# ------------------------------------------------------------------------------------
# Test insert vao bang categories
# data = {}
# data['category_name'] = 'Bevera'
# data['description'] = 'Soft drinks, coffees, teas, beers, and ales'
# data['picture'] = ''
# report = requests.post('http://192.168.1.13:8080/insert_categories', json=data)
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


# ------------------------------------------------------------------------------------
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
# report = requests.post('http://192.168.1.13:8080/insert_customers', json=data)
# print(report.text)


# Test giao tiep
# data = {}
# data['x'] = 7
# report = requests.post('http://192.168.1.13:8080/test_send_receive', json=data)
# print(report.text)
