<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientDashbaordController extends Controller
{
    //
    public function clientDashboard()
    {
        return Inertia::render("Client/ClientDashPage");
    }
}
