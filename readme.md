<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>


## Employee Test

## - Requirements

- NodeJs in the latest stable version.
- PHP >7.1
- Composer
- Database compatible with Eloquent.

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

Enter ``` front-end ``` folder inside the root of the project and run:

``` 
npm install 
```

Run angular server:
``` 
npm start
```

To run Unit test using PhpUnit, run this command inside root folder:
``` 
vendor/bin/phpunit
```
Obs: Remember to run PHPUNIT while artisan server is on!

Now, enjoy!


