<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ApiTokenController extends Controller
{
    public function createToken(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'=>'error',
                'data'=>'user not found',
            ], 201);
        }
        $token = $user->createToken($user->name);
        return response()->json([
            'status'=>'success',
            'data'=>$token->plainTextToken,
        ], 201);
    }

    public function removeToken(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'=>'success',
            'data'=>'token deleted',
        ], 201);
    }
}
