<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminDashbaordController extends Controller
{
    //
    public function adminDashboard()
    {

        $clients = DB::table('oauth_clients as oc')
                ->join('users as u', 'oc.user_id', '=', 'u.id')
                ->select('oc.id', 'oc.name', 'oc.secret', 'oc.redirect', 'u.name as user_name', 'u.email', 'u.type')
                ->orderBy('oc.id', 'desc')
                ->get();


        return Inertia::render("Admin/AdminPage",compact('clients'));
    }
}
