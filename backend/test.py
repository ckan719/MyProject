import requests

data = {}
data['category_id'] = '1'
data['category_name'] = 'category_name'
data['description'] = 'description'
data['picture'] = ''
report = requests.post('https://192.168.1.13:8080/insert_categories', json=data)
print(report.text)