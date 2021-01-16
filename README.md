# MyProject
 ## Nguyễn Công Nhật
 ## Phạm Văn Minh
 ## Phạm Hùng Vương

## Clone project
 Clone git project : git clone https://github.com/ckan719/MyProject.git
# Requirement
- name database : northwind_db (create table in file db/sql_create.sql)
- --env db_ip=<"your ip server">
- port host :8080

# Build & Run
 cd MyProject/backend
 docker build -t backend .
 docker run -d --name backend --env db_ip=10.0.2.128 -p 8080:8080 backend
# DB
 docker pull postgres:alpine
 docker run -d --restart unless-stopped --name postgres-0 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgres:alpine
 docker exec -it postgres-0 bash
 psql -U postgres
 
 * DB name : northwind_db
 * Các bảng ở file : db/sql_creat.sql






