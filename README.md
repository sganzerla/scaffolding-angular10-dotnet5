# scafolding-angular10-dotnet5

Project scaffolfing simple for testing .Net 5 with Angular 10.

## Technologies

* .Net 5
* Angular 10
* MS SQL Server
* API REST
* Bootstrap
* Typescript
* NPM
* Swagger (docs API)
* Insomnia (Call API REST)
* VSCode (Code)
* Ubuntu (Dev)

## TODO (Sorry)

* Filter table employee
* Remove Query SQL Controller
* Include ORM
* Remove any type in Angular Project
* Relate entities
* Publish Vercell and Heroku
* Improve documentation
* Unit tests
  
## How to use

Before to create database with script [mock](Resources/mock.sql).

For running backend WebAPI in port 5001:

    `
    $cd WebAPI
    $dotnet restore
    $dotnet run
    `
For testing backend import [request](Resources/REST.json) file json Insomnia or access https://localhost:5001/swagger

For running frontend Angular in port 4200:

    `
    $cd UI/angular10
    $npm install
    $ng serve --o
    `
For testing access https://localhost:4200

## Credit

[Art of Engineer](https://youtu.be/Dpv6lUKNL9o). Access in Nov 2020.
