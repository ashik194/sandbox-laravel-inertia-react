<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');


Route::post('register',[AuthController::class,'store'])->name('auth.store');
Route::post('login',[AuthController::class,'login'])->name('auth.login');

