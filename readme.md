<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>


## Employee Test

## - Requirements

- NodeJs in the latest stable version.
- PHP >7.1
- Composer
- Database compatible with Laravel and Eloquent.

## - Installation

First, use composer to install Laravel dependencies:
```
php composer install
```
Create a database:
```
create database test;
```
Configure database inside .env file using the database you have created:
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=test
DB_USERNAME=posgres
DB_PASSWORD=secret
```

Run laravel migrations to create tables:

``` 
php artisan migrate
```

## - Installing Angular

Enter folder ``` front-end ``` inside of project root and run:

``` 
npm install 
```

Run angular server:
``` 
npm start
```


