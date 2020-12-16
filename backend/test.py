import requests

# Test insert vao bang categories
# data = {}
# data['category_name'] = 'Nguyen Nhat'
# data['description'] = 'Cuc ki thuyet phuc'
# data['picture'] = ''
# report = requests.post('http://192.168.1.13:8080/insert_categories', json=data)
# print(report.text)

# Test insert vao bang customers
data = {}

report = requests.post('http://192.168.1.13:8080/insert_categories', json=data)
print(report.text)


# Test giao tiep
# data = {}
# data['x'] = 7
# report = requests.post('http://192.168.1.13:8080/test_send_receive', json=data)
# print(report.text)