<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Passport\ClientRepository;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    protected $clients;

    public function __construct(ClientRepository $clients)
    {
        $this->clients = $clients;
    }
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        
        $clientId = Str::uuid()->toString();
        $this->clients->create($clientId, $user->id, $user->name, 'http://mygov.com.bd');

        event(new Registered($user));

        // Auth::login($user);

        if($user){
            if(Auth::user()->type === 1){
                return redirect()->route('admin.dashboard');
            }else if(Auth::user()->type === 2){
                return redirect()->route('client.dashboard');
            }else{
                return redirect('/');
            }
        }else{
            return redirect()->route('login'); 
        }
        // return redirect(route('dashboard', absolute: false));
    }
}
