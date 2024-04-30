<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return Auth::guard('api')->user();
// })->middleware('admin');

// Route::get('/client', function (Request $request) {
//     return "2nd User";
// })->middleware('client');

Route::prefix('admin')->group(function (){
    Route::post('/logout', [AuthController::class, 'destroy']);
    Route::get('/user', function (Request $request) {
        return Auth::guard('api')->user();
    });
})->middleware('admin');

Route::prefix('client')->group(function (){
    Route::post('/logout', [AuthController::class, 'destroy']);
    Route::get('/client', function (Request $request) {
        return "2nd User";
    });
})->middleware('client');

Route::post('register',[AuthController::class,'store'])->name('auth.store');
Route::post('login',[AuthController::class,'login'])->name('auth.login');
