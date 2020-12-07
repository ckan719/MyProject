import requests

data = {}
data['category_id'] = '1'
data['category_name'] = 'category_name'
data['description'] = 'description'
data['picture'] = '\x'
report = requests.post('https://192.168.1.9:8080/insert_categories', json=data)
print(report.text)