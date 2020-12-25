class employees:
    def __init__(self, employee_id=None, last_name=None, first_name=None, title=None, title_of_courtesy=None,
                 birth_date=None, hire_date=None, address=None, city=None, region=None, postal_code=None,
                 country=None, home_phone=None, extension=None, photo=None, notes=None,
                 photo_path=None):
        self.employee_id = employee_id
        self.last_name = last_name
        self.first_name = first_name
        self.title = title
        self.title_of_courtesy = title_of_courtesy
        self.birth_date = birth_date
        self.hire_date = hire_date
        self.address = address
        self.city = city
        self.region = region
        self.postal_code = postal_code
        self.country = country
        self.home_phone = home_phone
        self.extension = extension
        self.photo = photo
        self.notes = notes
        self.photo_path = photo_path

    def fetch_data(self, data):
        self.employee_id = data[0]
        self.last_name = data[1]
        self.first_name = data[2]
        self.title = data[3]
        self.title_of_courtesy = data[4]
        self.birth_date = data[5]
        self.hire_date = data[6]
        self.address = data[7]
        self.city = data[8]
        self.region = data[9]
        self.postal_code = data[10]
        self.country = data[11]
        self.home_phone = data[12]
        self.extension = data[13]
        self.photo = data[14]
        self.notes = data[15]
        self.photo_path = data[16]

    def to_json(self):
        return {
            'employee_id': self.employee_id,
            'last_name': self.last_name,
            'first_name': self.first_name,
            'title': self.title,
            'title_of_courtesy': self.title_of_courtesy,
            'birth_date': self.birth_date,
            'hire_date': self.hire_date,
            'address': self.address,
            'city': self.city,
            'region': self.region,
            'postal_code': self.postal_code,
            'country': self.country,
            'home_phone': self.home_phone,
            'extension': self.extension,
            'photo': self.photo,
            'notes': self.notes,
            'photo_path': self.photo_path
        }
