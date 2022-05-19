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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//Route::get('/seats/{id}', [\Index\Http\Controllers\SeatController::class, 'show']);
//Route::post('/seats', SeatController::class);
Route::apiResource('seats', \App\Http\Controllers\SeatController::class);

//Route::get('/hall/{id}', [\Index\Http\Controllers\HallController::class, 'show']);
//Route::put('/hall/{id}', [\Index\Http\Controllers\HallController::class, 'update']);
//Route::get('/hall', [\Index\Http\Controllers\HallController::class, 'index']);
//Route::post('/hall', [\Index\Http\Controllers\HallController::class, 'store']);
//Route::delete('/hall/{id}', [\Index\Http\Controllers\HallController::class, 'destroy']);
Route::apiResource('hall', \App\Http\Controllers\HallController::class);

//Route::get('/film/{id}', [\Index\Http\Controllers\FilmController::class, 'show']);
//Route::get('/film', [\Index\Http\Controllers\FilmController::class, 'index']);
//Route::post('/film', [\Index\Http\Controllers\FilmController::class, 'store']);
//Route::delete('/film/{id}', [\Index\Http\Controllers\FilmController::class, 'update']);
Route::apiResource('films', \App\Http\Controllers\FilmController::class);

//Route::apiResource('/seats', \Index\Http\Controllers\SeatController::class);
//Route::apiResource('hall', \Index\Http\Controllers\HallController::class);
Route::apiResource('session', \App\Http\Controllers\SessionController::class);
