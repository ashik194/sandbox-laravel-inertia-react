<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminDashbaordController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ClientDashbaordController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// admin routes

// Route::get('/admin', [AdminController::class, 'index']);

// clients routes
// Route::get('/clients', [ClientController::class, 'index'])->name('clients');
// Route::get('/clients/sso', [ClientController::class, 'sso'])->name('sso');
// Route::get('/clients/api', [ClientController::class, 'api'])->name('api');

    

    
Route::middleware(['admincheck'])->group(function () {
    Route::get('/admin-dashboard', [AdminDashbaordController::class, 'adminDashboard'])->name('admin.dashboard');
});

Route::middleware(['clientcheck'])->group(function () {
    Route::get('/clients-dashboard', [ClientDashbaordController::class, 'clientDashboard'])->name('client.dashboard');
    Route::get('/clients/sso', [ClientController::class, 'sso'])->name('sso');
    Route::get('/clients/api', [ClientController::class, 'api'])->name('api');
});

// Route::get('/dashboard', function () {
//     if (auth()->user()->type === 1) {
//         return redirect()->route('admin.dashboard');
//     } elseif (auth()->user()->type === 2) {
//         return redirect()->route('client.dashboard');
//     } else {
//         return Inertia::render('Dashboard');
//     }
// })->middleware(['auth', 'verified'])->name('dashboard');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
