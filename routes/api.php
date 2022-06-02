<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
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




    Route::apiResource('/client', \App\Http\Controllers\ClientController::class);

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('hall', \App\Http\Controllers\HallController::class);
    Route::apiResource('seats', \App\Http\Controllers\SeatController::class);
    Route::apiResource('film', \App\Http\Controllers\FilmController::class);
    // Route::apiResource('session', \App\Http\Controllers\SessionController::class);
    Route::get('session/{id}', [\App\Http\Controllers\SessionController::class, 'show']);
    Route::post('session', [\App\Http\Controllers\SessionController::class, 'store']);
    Route::delete('session/{id}', [\App\Http\Controllers\SessionController::class, 'destroy']);
});

Route::post('token', [\App\Http\Controllers\ApiTokenController::class, 'createToken']);

Route::get('logout', [\App\Http\Controllers\ApiTokenController::class, 'removeToken']);