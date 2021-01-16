# MyProject
 ## Nguyễn Công Nhật
 ## Phạm Văn Minh
 ## Phạm Hùng Vương

# Clone project
 Clone git project : git clone https://github.com/ckan719/MyProject.git
# Build & Run


 1.Stop and remove old container: docker stop backend && docker rm backend
 2.Build image:
    - cd MyProject/backend
    - docker build -t backend .
 3.Run the container:  docker run -d --name backend --env db_ip=10.0.2.128 -p 8080:8080 backend
# DB
 1. Pull images :  docker pull postgres:alpine
 2. Run db :  docker run -d --restart unless-stopped --name postgres-0 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgres:alpine
 3. Go to DB :
    - docker exec -it postgres-0 bash
    - psql -U postgres
    - \c northwind_db
 * DB name : northwind_db
 * Các bảng ở file : db/sql_creat.sql
# Entity
## categories
    - category_id
    - category_name
    - description
    - picture
## customers
    - customer_id
    - company_name
    - contact_name
    - contact_title
    - address
    - city
    - region
    - postal_code
    - country
    - phone
    - fax
## employees
    - employee_id
    - last_name
    - first_name
    - title
    - title_of_courtesy
    - birth_date
    - hire_date
    - address
    - city
    - region
    - postal_code
    - country
    - home_phone
    - extension
    - photo
    - notes
    - photo_path
## suppliers
    - supplier_id
    - company_name
    - contact_name
    - contact_title
    - address
    - city
    - region
    - postal_code
    - country
    - phone
    - fax
    - homepage
## products
    - product_id
    - product_name
    - supplier_id
    - category_id
    - quantity_per_unit
    - unit_price
    - units_in_stock
    - units_on_order
    - reorder_level
    - discontinued
## region
    - region_id
    - region_description
## shippers
    - shipper_id
    - company_name
    - phone
## orders
    - order_id
    - customer_id
    - employee_id
    - order_date
    - required_date
    - shipped_date
    - ship_via
    - freight
    - ship_name
    - ship_address
    - ship_city
    - ship_region
    - ship_postal_code
    - ship_country
## territories
    - territory_id
    - territory_description
    - region_id
## employee_territories
    - employee_territories_id
    - employee_id
    - territory_id
## order_details
    - order_details_id
    - order_id
    - product_id
    - unit_price
    - quantity
    - discount
## us_states
    - state_id
    - state_name
    - state_abbr
    - state_region
## customer_customer_demo
    - customer_customer_demo_id
    - customer_id
    - customer_type_id
## customer_demographics
    - customer_type_id
    - customer_desc
# API
## categories
###     Get all categories
            * Request :
                - Method : GET
                - Endpoint : /user/all_categories
                - Body : None
            * Response : [category]
###     Add categories
            * Request :
                - Method : POST
                - Endpoint : /insert_categories
                - Body : {
                    'category_name': string',
                    'description': string,
                    'picture': string
                }
            * Response : message
###     Update categories
            * Request :
                - Method : PUT
                - Endpoint : /update_categories
                - Body : {
                    'category_id' : string,
                    'category_name': string,
                    'description': string,
                    'picture': string
                }
            * Response : message
###     Delete categories
            * Request :
                - Method : PUT
                - Endpoint : /delete_categories/<int:cate_id>
                - Body : {
                    'cate_id' : int
                }
            * Response : message
## customers
###     Get all customers
            * Request :
                - Method : GET
                - Endpoint : /user/all_customers
                - Body : None
            * Response : [customer]
###     Add customers
            * Request :
                - Method : POST
                - Endpoint : /insert_customers
                - Body : {
                    'customer_id': string,
                    'company_name': string,
                    'contact_name': string,
                    'contact_title': string,
                    'address': string,
                    'city': string,
                    'region': string,
                    'postal_code': int,
                    'country': int,
                    'phone': string,
                    'fax': string
                }
            * Response : message
###     Update customers
            * Request :
                - Method : PUT
                - Endpoint : /update_customers
                - Body : {
                    'customer_id': string,
                    'company_name': string,
                    'contact_name': string,
                    'contact_title': string,
                    'address': string,
                    'city': string,
                    'region': string,
                    'postal_code': int,
                    'country': int,
                    'phone': string,
                    'fax': string
                }
            * Response : message
###     Delete customers
            * Request :
                - Method : PUT
                - Endpoint : /delete_customers/<cus_id>
                - Body : {
                    'cus_id' : string
                }
            * Response : message
## employees
###     Get all employees
            * Request :
                - Method : GET
                - Endpoint : /user/all_employees
                - Body : None
            * Response : [employee]
###     Add employees
            * Request :
                - Method : POST
                - Endpoint : /insert_employees
                - Body : {
                    'last_name': string,
                    'first_name': string,
                    'title': string,
                    'title_of_courtesy': string,
                    'birth_date': string,
                    'hire_date': string,
                    'address': string,
                    'city': string,
                    'region': string,
                    'postal_code': string,
                    'country': string,
                    'home_phone': string,
                    'extension': string,
                    'photo': string,
                    'notes': string,
                    'photo_path': string
                }
            * Response : message
###     Update employees
            * Request :
                - Method : PUT
                - Endpoint : /update_employees
                - Body : {
                    'employee_id': string,
                    'last_name': string,
                    'first_name': string,
                    'title': string,
                    'title_of_courtesy': string,
                    'birth_date': string,
                    'hire_date': string,
                    'address': string,
                    'city': string,
                    'region': string,
                    'postal_code': string,
                    'country': string,
                    'home_phone': string,
                    'extension': string,
                    'photo': string,
                    'notes': string,
                    'photo_path': string
                }
            * Response : message
###     Delete employees
            * Request :
                - Method : PUT
                - Endpoint : /delete_employees/<int:employee_id>
                - Body : {
                    'employee_id' : int
                }
            * Response : message
## shippers
###     Get all shippers
            * Request :
                - Method : GET
                - Endpoint : /user/all_shippers
                - Body : None
            * Response : [shipper]
###     Add shippers
            * Request :
                - Method : POST
                - Endpoint : /insert_shippers
                - Body : {
                    'company_name': string,
                    'phone': string
                }
            * Response : message
###     Update shippers
            * Request :
                - Method : PUT
                - Endpoint : /update_shippers
                - Body : {
                    'shipper_id': string,
                    'company_name': string,
                    'phone': string
                }
            * Response : message
###     Delete shippers
            * Request :
                - Method : PUT
                - Endpoint : /delete_shippers/<int:shipper_id>
                - Body : {
                    'shipper_id' : int
                }
            * Response : message



