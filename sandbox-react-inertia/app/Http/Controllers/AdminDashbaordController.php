<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashbaordController extends Controller
{
    //
    public function adminDashboard()
    {
        return Inertia::render("Admin/AdminPage");
    }
}
