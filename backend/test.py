import requests

# Test insert vao bang categories
# data = {}
# data['category_name'] = 'Beverages'
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
data = {}
data['category_id'] = '3'
data['category_name'] = 'Beverages'
data['description'] = 'Soft drinks, coffees, teas, beers, and ales'
data['picture'] = ''
report = requests.post('http://192.168.1.13:8080/update_categories', json=data)
print(report.text)

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