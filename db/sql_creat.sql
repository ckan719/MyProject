SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;



SET default_tablespace = '';

SET default_with_oids = false;

DROP TABLE IF EXISTS customer_customer_demo;
DROP TABLE IF EXISTS customer_demographics;
DROP TABLE IF EXISTS employee_territories;
DROP TABLE IF EXISTS order_details;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS shippers;
DROP TABLE IF EXISTS suppliers;
DROP TABLE IF EXISTS territories;
DROP TABLE IF EXISTS us_states;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS region;
DROP TABLE IF EXISTS employees;

CREATE TABLE categories (
	category_id SERIAL PRIMARY KEY,
	category_name character varying(15) NOT NULL,
	description text, 
	picture text
);



CREATE TABLE customers (
    customer_id bpchar NOT NULL PRIMARY KEY,
    company_name character varying(40) NOT NULL,
    contact_name character varying(30),
    contact_title character varying(30),
    address character varying(60),
    city character varying(15),
    region character varying(15),
    postal_code character varying(10),
    country character varying(15),
    phone character varying(24),
    fax character varying(24)
);

CREATE TABLE customer_demographics (
    customer_type_id bpchar NOT NULL PRIMARY KEY,
    customer_desc text
);


CREATE TABLE customer_customer_demo (
	customer_customer_demo_id SERIAL PRIMARY KEY,
    customer_id bpchar NOT NULL,
    customer_type_id bpchar NOT NULL,
    FOREIGN KEY (customer_type_id) REFERENCES customer_demographics ON DELETE CASCADE ,
    FOREIGN KEY (customer_id) REFERENCES customers ON DELETE CASCADE
);



CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    last_name character varying(20) NOT NULL,
    first_name character varying(10) NOT NULL,
    title character varying(30),
    title_of_courtesy character varying(25),
    birth_date date,
    hire_date date,
    address character varying(60),
    city character varying(15),
    region character varying(15),
    postal_code character varying(10),
    country character varying(15),
    home_phone character varying(24),
    extension character varying(4),
    photo bytea,
    notes text,
    photo_path character varying(255)
);




CREATE TABLE suppliers (
    supplier_id SERIAL PRIMARY KEY,
    company_name character varying(40) NOT NULL,
    contact_name character varying(30),
    contact_title character varying(30),
    address character varying(60),
    city character varying(15),
    region character varying(15),
    postal_code character varying(10),
    country character varying(15),
    phone character varying(24),
    fax character varying(24),
    homepage text
);




CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name character varying(40) NOT NULL,
    supplier_id smallint,
    category_id smallint,
    quantity_per_unit character varying(20),
    unit_price real,
    units_in_stock smallint,
    units_on_order smallint,
    reorder_level smallint,
    discontinued integer NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories ON DELETE CASCADE,
	FOREIGN KEY (supplier_id) REFERENCES suppliers ON DELETE CASCADE
);




CREATE TABLE region (
    region_id SERIAL PRIMARY KEY,
    region_description bpchar NOT NULL
);




CREATE TABLE shippers (
    shipper_id SERIAL PRIMARY KEY,
    company_name character varying(40) NOT NULL,
    phone character varying(24)
);




CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id bpchar,
    employee_id integer,
    order_date date,
    required_date date,
    shipped_date date,
    ship_via smallint,
    freight real,
    ship_name character varying(40),
    ship_address character varying(60),
    ship_city character varying(15),
    ship_region character varying(15),
    ship_postal_code character varying(10),
    ship_country character varying(15),
    FOREIGN KEY (customer_id) REFERENCES customers ON DELETE CASCADE,
    FOREIGN KEY (employee_id) REFERENCES employees ON DELETE CASCADE,
    FOREIGN KEY (ship_via) REFERENCES shippers ON DELETE CASCADE
);




CREATE TABLE territories (
    territory_id character varying(20) NOT NULL PRIMARY KEY,
    territory_description bpchar NOT NULL,
    region_id integer NOT NULL,
	FOREIGN KEY (region_id) REFERENCES region ON DELETE CASCADE
);



CREATE TABLE employee_territories (
	employee_territories_id SERIAL PRIMARY KEY,
    employee_id integer NOT NULL,
    territory_id character varying(20) NOT NULL,
    FOREIGN KEY (territory_id) REFERENCES territories ON DELETE CASCADE,
    FOREIGN KEY (employee_id) REFERENCES employees ON DELETE CASCADE
);




CREATE TABLE order_details (
	order_details_id SERIAL PRIMARY KEY,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    unit_price real NOT NULL,
    quantity smallint NOT NULL,
    discount real NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders ON DELETE CASCADE
);




CREATE TABLE us_states (
    state_id SERIAL PRIMARY KEY,
    state_name character varying(100),
    state_abbr character varying(2),
    state_region character varying(50)
);
	