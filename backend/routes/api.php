<?php

use App\Http\Controllers\RegionController;
use App\Http\Controllers\ProvinciaController;
use App\Http\Controllers\CiudadController;
use App\Http\Controllers\CalleController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//index - store- show - update - destoy

Route::get('/regiones', [RegionController::class, 'index']);
Route::post('/regiones', [RegionController::class, 'store']);
Route::get('/regiones/{id}', [RegionController::class, 'show']);
Route::put('/regiones/{id}', [RegionController::class, 'update']);
Route::delete('/regiones/{id}', [RegionController::class, 'destroy']);

Route::get('/provincias', [ProvinciaController::class, 'index']);
Route::post('/provincias', [ProvinciaController::class, 'store']);
Route::get('/provincias/{id}', [ProvinciaController::class, 'show']);
Route::put('/provincias/{id}', [ProvinciaController::class, 'update']);
Route::delete('/provincias/{id}', [ProvinciaController::class, 'destroy']);

Route::get('/ciudades', [CiudadController::class, 'index']);
Route::post('/ciudades', [CiudadController::class, 'store']);
Route::get('/ciudades/{id}', [CiudadController::class, 'show']);
Route::put('/ciudades/{id}', [CiudadController::class, 'update']);
Route::delete('/ciudades/{id}', [CiudadController::class, 'destroy']);

Route::get('/calles', [CalleController::class, 'index']);
Route::post('/calles', [CalleController::class, 'store']);
Route::get('/calles/{id}', [CalleController::class, 'show']);
Route::put('/calles/{id}', [CalleController::class, 'update']);
Route::delete('/calles/{id}', [CalleController::class, 'destroy']);

