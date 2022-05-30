<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/tokens/create', function (Request $request) {
    $token = $request->user()->createToken($request->token_name);

    return ['token' => $token->plainTextToken];
});

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('hall', \App\Http\Controllers\HallController::class);
    Route::apiResource('seats', \App\Http\Controllers\SeatController::class);
    Route::apiResource('film', \App\Http\Controllers\FilmController::class);
    Route::apiResource('session', \App\Http\Controllers\SessionController::class);    
});

