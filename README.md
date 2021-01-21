# MyProject
 ### Nguyễn Công Nhật
 ### Phạm Văn Minh
 ### Phạm Hùng Vương

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
        - DB name : northwind_db
        - Các bảng ở file : db/sql_creat.sql
# Entity
### categories
    - category_id
    - category_name
    - description
    - picture
### customers
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
### employees
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
### suppliers
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
### products
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
### region
    - region_id
    - region_description
### shippers
    - shipper_id
    - company_name
    - phone
### orders
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
### territories
    - territory_id
    - territory_description
    - region_id
### employee_territories
    - employee_territories_id
    - employee_id
    - territory_id
### order_details
    - order_details_id
    - order_id
    - product_id
    - unit_price
    - quantity
    - discount
### us_states
    - state_id
    - state_name
    - state_abbr
    - state_region
### customer_customer_demo
    - customer_customer_demo_id
    - customer_id
    - customer_type_id
### customer_demographics
    - customer_type_id
    - customer_desc
# API
### categories
#####     Get all categories
            * Request :
                - Method : GET
                - Endpoint : /user/all_categories
                - Body : None
            * Response : [category]
#####     Add categories
            * Request :
                - Method : POST
                - Endpoint : /insert_categories
                - Body : {
                    'category_name': string',
                    'description': string,
                    'picture': string
                }
            * Response : message
#####     Update categories
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
#####     Delete categories
            * Request :
                - Method : PUT
                - Endpoint : /delete_categories/<int:cate_id>
                - Body : {
                    'cate_id' : int
                }
            * Response : message
### customers
#####     Get all customers
            * Request :
                - Method : GET
                - Endpoint : /user/all_customers
                - Body : None
            * Response : [customer]
#####     Add customers
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
#####     Update customers
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
#####     Delete customers
            * Request :
                - Method : PUT
                - Endpoint : /delete_customers/<cus_id>
                - Body : {
                    'cus_id' : string
                }
            * Response : message
### employees
#####     Get all employees
            * Request :
                - Method : GET
                - Endpoint : /user/all_employees
                - Body : None
            * Response : [employee]
#####     Add employees
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
#####     Update employees
            * Request :
                - Method : PUT
                - Endpoint : /update_employees
                - Body : {
                    'employee_id': int,
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
#####     Delete employees
            * Request :
                - Method : PUT
                - Endpoint : /delete_employees/<int:employee_id>
                - Body : {
                    'employee_id' : int
                }
            * Response : message
### shippers
#####     Get all shippers
            * Request :
                - Method : GET
                - Endpoint : /user/all_shippers
                - Body : None
            * Response : [shipper]
#####     Add shippers
            * Request :
                - Method : POST
                - Endpoint : /insert_shippers
                - Body : {
                    'company_name': string,
                    'phone': string
                }
            * Response : message
#####     Update shippers
            * Request :
                - Method : PUT
                - Endpoint : /update_shippers
                - Body : {
                    'shipper_id': string,
                    'company_name': string,
                    'phone': string
                }
            * Response : message
#####     Delete shippers
            * Request :
                - Method : PUT
                - Endpoint : /delete_shippers/<int:shipper_id>
                - Body : {
                    'shipper_id' : int
                }
            * Response : message
### orders
#####     Get all orders
            * Request :
                - Method : GET
                - Endpoint : /user/all_orders
                - Body : None
            * Response : [order]
#####     Add orders
            * Request :
                - Method : POST
                - Endpoint : /insert_orders
                - Body : {
                    'customer_id': string,
                    'employee_id': string,
                    'order_date': string,
                    'required_date': string,
                    'shipped_date': string,
                    'ship_via': int,
                    'freight': float,
                    'ship_name': string,
                    'ship_address': string,
                    'ship_city': string,
                    'ship_region': string,
                    'ship_postal_code': string,
                    'ship_country': string
                }
            * Response : message
#####     Update orders
            * Request :
                - Method : PUT
                - Endpoint : /update_orders
                - Body : {
                    'order_id': int,
                    'customer_id': string,
                    'employee_id': string,
                    'order_date': string,
                    'required_date': string,
                    'shipped_date': string,
                    'ship_via': int,
                    'freight': float,
                    'ship_name': string,
                    'ship_address': string,
                    'ship_city': string,
                    'ship_region': string,
                    'ship_postal_code': string,
                    'ship_country': string
                }
            * Response : message
#####     Delete orders
            * Request :
                - Method : PUT
                - Endpoint : /delete_orders/<int:order_id>
                - Body : {
                    'order_id' : int
                }
            * Response : message
### order_details
#####     Get all order_details
            * Request :
                - Method : GET
                - Endpoint : /user/all_order_details
                - Body : None
            * Response : [order_detail]
#####     Add order_details
            * Request :
                - Method : POST
                - Endpoint : /insert_order_details
                - Body : {
                    'order_id': string,
                    'product_id': string,
                    'unit_price': string,
                    'quantity': string,
                    'discount': string
                }
            * Response : message
#####     Update order_details
            * Request :
                - Method : PUT
                - Endpoint : /update_order_details
                - Body : {
                    'order_details_id': int,
                    'order_id': string,
                    'product_id': string,
                    'unit_price': string,
                    'quantity': string,
                    'discount': string
                }
            * Response : message
#####     Delete order_details
            * Request :
                - Method : PUT
                - Endpoint : /delete_order_details/<int:order_details_id>
                - Body : {
                    'order_details_id' : int
                }
            * Response : message
### suppliers
#####     Get all suppliers
            * Request :
                - Method : GET
                - Endpoint : /user/all_suppliers
                - Body : None
            * Response : [supplier]
#####     Add suppliers
            * Request :
                - Method : POST
                - Endpoint : /insert_suppliers
                - Body : {
                    'company_name': string,
                    'contact_name': string,
                    'contact_title': string,
                    'address': string,
                    'city': string,
                    'region': string,
                    'postal_code': string,
                    'country': string,
                    'phone': string,
                    'fax': string,
                    'homepage': string
                }
            * Response : message
#####     Update suppliers
            * Request :
                - Method : PUT
                - Endpoint : /update_suppliers
                - Body : {
                    'supplier_id': int,
                    'company_name': string,
                    'contact_name': string,
                    'contact_title': string,
                    'address': string,
                    'city': string,
                    'region': string,
                    'postal_code': string,
                    'country': string,
                    'phone': string,
                    'fax': string,
                    'homepage': string
                }
            * Response : message
#####     Delete suppliers
            * Request :
                - Method : PUT
                - Endpoint : /delete_suppliers/<int:supplier_id>
                - Body : {
                    'supplier_id' : int
                }
            * Response : message
### products
#####     Get all products
            * Request :
                - Method : GET
                - Endpoint : /user/all_products
                - Body : None
            * Response : [product]
#####     Add products
            * Request :
                - Method : POST
                - Endpoint : /insert_products
                - Body : {
                    'product_name': string,
                    'supplier_id': string,
                    'category_id': string,
                    'quantity_per_unit': string,
                    'unit_price': string,
                    'units_in_stock': string,
                    'units_on_order': string,
                    'reorder_level': string,
                    'discontinued': string
                }
            * Response : message
#####     Update products
            * Request :
                - Method : PUT
                - Endpoint : /update_products
                - Body : {
                    'product_id': int,
                    'product_name': string,
                    'supplier_id': string,
                    'category_id': string,
                    'quantity_per_unit': string,
                    'unit_price': string,
                    'units_in_stock': string,
                    'units_on_order': string,
                    'reorder_level': string,
                    'discontinued': string
                }
            * Response : message
#####     Delete products
            * Request :
                - Method : PUT
                - Endpoint : /delete_products/<int:product_id>
                - Body : {
                    'product_id' : int
                }
            * Response : message
### region
#####     Get all region
            * Request :
                - Method : GET
                - Endpoint : /user/all_region
                - Body : None
            * Response : [region]
#####     Add region
            * Request :
                - Method : POST
                - Endpoint : /insert_region
                - Body : {
                    'region_description': string
                }
            * Response : message
#####     Update region
            * Request :
                - Method : PUT
                - Endpoint : /update_region
                - Body : {
                    'region_id': int,
                    'region_description': string
                }
            * Response : message
#####     Delete region
            * Request :
                - Method : PUT
                - Endpoint : /delete_region/<int:region_id>
                - Body : {
                    'region_id' : int
                }
            * Response : message


