<?php
namespace App\Services;

use App\Http\Resources\AuthResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\ClientRepository;
use Illuminate\Support\Str;

class AuthService{
    protected $clients;

    public function __construct(ClientRepository $clients)
    {
        $this->clients = $clients;
    }

    public function AuthCreate($request)
    {
        $user           = new User();
        $user->name     = $request->name;
        $user->email    = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $clientId = Str::uuid()->toString();
        $this->clients->create($clientId, $user->id, $user->name, 'http://mygov.com.bd');

        return new AuthResource($user);
    }
}

?>