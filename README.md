# APP TEST Holdco

Aplicacion desarrollada con Laravel para el backend y React para el frontend.

## Requisitos

- PHP 
- Composer
- Laravel 
- MySQL
- Node.js

## Instalacion

## 1. Clonar repositorio y luego ingresar a la carpeta del archivo

git clone https://github.com/zcrile/app-test-hold

## 2. accede a la carpeta del backend e instala composer (si es que no lo tiene)

cd backend
composer install

## 3. Crea archivo env a partir del archivo ejemplo 

	cp .env.example .env

## 4. Edita el archivo .env para la conexion con MySQL (ejemplo).

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=base_holdco
DB_USERNAME=root
DB_PASSWORD=



## 5. Crea la base de datos en mysql.

	mysql -u root -p
    CREATE DATABASE base_holdco;
    EXIT;

## 6. Crea clave de aplicacion y ejecuta las migraciones/seeders.

	php artisan key:generate
    	php artisan migrate
    	php artisan db:seed

## 7. Inicia servidor.

	php artisan serve.


## 8. Configuracion frontend navega a la carpeta frontend.

	cd ../frontend

## 9. Instala las dependencias.

	npm install
	npm run dev

## 10.  Acedder a la aplicacion mediante la url por defecto.

	http://localhost:5173


