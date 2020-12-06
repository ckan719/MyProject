class categories:
    def __init__(self, category_id, category_name , description , picture ):
        self.category_id  = category_id
        self.category_name  = category_name
        self.description  = description
        self.picture  = picture
    def fetch_data(self, data):
        self.category_id  = data[0]
        self.category_name  = data[1]
        self.description  = data[2]
        self.picture  = data[3]