### MyProject
 ## Nguyễn Công Nhật
 ## Phạm Văn Minh
 ## Phạm Hùng Vương

## Clone project
 Clone git project : git clone https://github.com/ckan719/MyProject.git
## Requirement
- name database : northwind_db (create table in file db/sql_create.sql)
- --env db_ip=<"your ip server">
- port host :8080

## Build & Run


 1.Stop and remove old container: docker stop backend && docker rm backend
 2.Build image:
    - cd MyProject/backend
    - docker build -t backend .
 3.Run the container:  docker run -d --name backend --env db_ip=10.0.2.128 -p 8080:8080 backend
## DB
 1. Pull images :  docker pull postgres:alpine
 2. Run db :  docker run -d --restart unless-stopped --name postgres-0 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgres:alpine
 3. Go to DB :
    - docker exec -it postgres-0 bash
    - psql -U postgres
    - \c northwind_db
 * DB name : northwind_db
 * Các bảng ở file : db/sql_creat.sql
## Entity
# categories
    - category_id
    - category_name
    - description
    - picture
# customers
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
# employees
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
# suppliers
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
# products
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
# region
    - region_id
    - region_description
# shippers
    - shipper_id
    - company_name
    - phone
# orders
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
# territories
    - territory_id
    - territory_description
    - region_id
# employee_territories
    - employee_territories_id
    - employee_id
    - territory_id
# order_details
    - order_details_id
    - order_id
    - product_id
    - unit_price
    - quantity
    - discount
# us_states
    - state_id
    - state_name
    - state_abbr
    - state_region
# customer_customer_demo
    - customer_customer_demo_id
    - customer_id
    - customer_type_id
# customer_demographics
    - customer_type_id
    - customer_desc





