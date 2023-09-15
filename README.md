

## MySql setup


```bash
CREATE TABLE employees (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
surname VARCHAR(50) NOT NULL,
birthdate DATE NOT NULL,
age INT NOT NULL
);
```
## .env File
```bash
MYSQL_HOST=localhost
MYSQL_DATABASE=Employees  
MYSQL_USER=javi
MYSQL_PASSWORD=28645455
```