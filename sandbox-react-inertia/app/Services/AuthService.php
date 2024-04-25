<?php
namespace App\Services;

use App\Http\Resources\AuthResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService{
    public function AuthCreate($request)
    {
        $user = new User();
        $user->name     = $request->name;
        $user->email    = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return new AuthResource($user);
    }
}

?>