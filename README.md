# APP TEST Holdco

Aplicacion desarrollada con Laravel para el backend y React para el frontend.

## Instalacion

## 1. Clonar repositorio 

git clone https://github.com/zcrile/app-test-hold

abrir la carpeta del archivo
cd backend
composer install

## 2. Crea archivo env a partir del archivo ejemplo 

	cp .env.example .env

## 3. Edita el archivo .env para la conexion con MySQL.

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=base_holdco
DB_USERNAME=root
DB_PASSWORD=



## 4. Crea la base de datos en mysql.

	mysql -u root -p
    CREATE DATABASE base_holdco;
    EXIT;

## 5. Crea clave de aplicacion y ejecuta las migraciones/seeders.

	php artisan key:generate
    	php artisan migrate
    	php artisan db:seed

## 6. Inicia servidor.

	php artisan serve.


## 7. Configuracion frontend navega a la carpeta frontend.

	cd ../frontend

## 8. Instala las dependencias.

	npm install
	npm run dev

## 9.  Acedder a la aplicacion mediante la url por defecto.

	http://localhost:5173
