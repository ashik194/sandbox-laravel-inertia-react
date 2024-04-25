<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/ClientDashPage'); 
    }
    public function sso()
    {
        return Inertia::render('Client/SSOPage'); 
    }
    public function api()
    {
        return Inertia::render('Client/APIPage'); 
    }
}
