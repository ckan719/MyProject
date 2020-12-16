# MyProject
 ## Nguyễn Công Nhật
 ## Phạm Văn Minh
 ## Phạm Hùng Vương

 link database : https://docs.yugabyte.com/latest/sample-data/northwind/#1-download-the-sql-scripts
##
# Note
Lúc create database chỗ nào có "smallint NOT NULL PRIMARY KEY" thì sửa thành "SERIAL PRIMARY KEY" nhé, 
ví dụ "category_id smallint NOT NULL PRIMARY KEY" thành "category_id SERIAL PRIMARY KEY",
còn mấy cái smallint mà k có primary thì giữ nguyên
#Happy Coding
##
## Some command
 Remvove container : docker rm <id or name> ; <firstly , stop container : docker stop <id or name> >
 ##
 Remove all container : docker rm &(docker ps -a -q)
 ##
 Remove images : docker image prune  && docker rmi <id or name>
 ##
 Remove directory : sudo rm -rf <name direc>
 ##
 Show port : sudo netstat -nl | head
 ##
 Remove port : sudo kill -9 $(sudo lsof -t -i:5432) (if exists port 5432)
 ##
 Show ip : ifconfig
 ##
 New direc : mkdir name_direc
 ##
 New file : touch name_file
 ##
 Open and fix file : nano name_file
 ##


## Clone project

 Clone git project : git clone https://github.com/ckan719/MyProject.git
 ##
 Get new : git pull
 ##
 Myproject/backend/

## Postgres db
 Use postgres on docker container : docker pull postgres:alpine
 

## command in ubuntu
 ssh -p 4567 hestia@192.168.1.16 ; <192.168.1.16, hestia is my ip and name vitual, ix them with your own >
 ##
 docker build -t backend .
 ##
 docker run -d --name backend --env db_ip=10.0.2.15 -p 8080:8080 backend
 ##
 docker pull postgres:alpine
 ##
 docker run -d --restart unless-stopped --name postgres-0 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres -p 5432:5432 postgres:alpine
 ##
 docker exec -it postgres-0 bash
 ##
 psql -U postgres
 ##
 Something create database here ... < \l is show list database >
 ##




