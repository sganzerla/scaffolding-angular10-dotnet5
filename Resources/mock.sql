
CREATE DATABASE EmployeeDB;

Use EmployeeDB;

CREATE TABLE dbo.Department(

    Id int identity(1,1),
    Name VARCHAR(500)
);

insert into dbo.Department VALUES('IT');

insert into dbo.Department VALUES('Support');

CREATE TABLE dbo.Employee(
Id int IDENTITY(1,1),
Name varchar(500),
Department VARCHAR(500),
DateOfJoining date,
PhotoFileName varchar(500) 
);

INSERT into dbo.Employee VALUEs
('Alisson', 'IT', '2020-05-23', 'alisson.png')