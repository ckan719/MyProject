class Employees:
    def __init__(self, employee_id, last_name, first_name , title ,title_of_courtesy,
                 birth_date, hire_date , address , city , region, postal_code ,
                 country ,home_phone ,extension ,photo ,notes ,reports_to ,photo_path ):
        self.employee_id = employee_id
        self.last_name = last_name
        self.first_name = first_name
        self.last_name = last_name
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
        self.reports_to = reports_to
        self.photo_path = photo_path

if __name__ == "__main__":
    print('build object')
