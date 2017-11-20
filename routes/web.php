<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/city/{id}', 'CityController@show');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('/profiles', 'ProfileController');
Route::resource('/users', 'UserController');

Route::resource('/cities', 'CityController');
Route::resource('/customers', 'CustomerController');

Route::resource('/products', 'ProductController');
Route::resource('/categories', 'CategoryController');

Route::resource('/orders', 'OrderController');