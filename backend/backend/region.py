class region:
    def __init__(self, region_id=None, region_description=None):
        self.region_id = region_id
        self.region_description = region_description

    def fetch_data(self, data):
        self.region_id = data[0]
        self.region_description = data[1]

    def to_json(self):
        return {
            'region_id': self.region_id,
            'region_description': self.region_description
        }
