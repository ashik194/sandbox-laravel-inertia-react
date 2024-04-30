<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function login(LoginRequest $request)
    {
        //
        $credentials = $request->validated();
        if (!Auth::attempt($credentials))
        {
            return response([
                'message' => 'Credentials are wrong...!!!'
            ], 422);
        }
        
        /** @var User $user */
        // $user = User::where('email',$request->email)->first();
        $user = Auth::user();
        $token = $user->createToken('AuthToken')->accessToken;

        return response()->json([
            'success'   => true,
            'user'      => $user,
            'token'     => $token,
            'message'   => "User Loggedin Successfully...!!!"
        ],200);
        
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AuthRequest $request)
    {
        //
        try{
            return $user   = (new AuthService())->AuthCreate($request);
            
            return response()->json([
                'status'    => true, 
                'data'      => $user, 
                'message'   => 'User Created successfully'
            ], 201);
        }catch(\Throwable $th){
            return response()->json(['status' => false, 'message' => $th->getMessage()], 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        try{
            Auth::guard('api')->user()->token()->revoke();

            return response()->json(
                [
                    'message' => "Successfully logged out"
                ]
            );
        }catch(\Exception $e){
            return response()->json(
                [
                    "message" => $e->getMessage()
                ],
                200
            );
        }

    }
}
