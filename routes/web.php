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
    return view('index');
});
Route::get('/admin', function () {
    return view('layouts/admin');
});
// BLOG
Route::resource('/admin/blog', 'BlogArticleController');

//TEXTS
Route::resource('/admin/texts', 'TextController');

//MANDALAS
Route::resource('/admin/quotes', 'QuoteController');
