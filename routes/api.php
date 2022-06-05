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



Route::post('token', [\App\Http\Controllers\ApiTokenController::class, 'createToken']);

Route::prefix('/client')->group(function() {
    Route::get('/seans/{id}/date/{date}', [\App\Http\Controllers\ClientController::class, 'dateSeans']);
    Route::post('/ticket', [\App\Http\Controllers\OrderController::class, 'store']);
    Route::get('/', [\App\Http\Controllers\ClientController::class, 'index']);
});

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('/hall', \App\Http\Controllers\HallController::class);
    Route::apiResource('/seats', \App\Http\Controllers\SeatController::class);
    Route::apiResource('/film', \App\Http\Controllers\FilmController::class);
    Route::apiResource('/session', \App\Http\Controllers\SessionController::class);
    Route::get('/logout', [\App\Http\Controllers\ApiTokenController::class, 'removeToken']);
});



