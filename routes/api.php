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



Route::get('/seats/{id}', [\App\Http\Controllers\SeatController::class, 'show']);
Route::post('/seats', [\App\Http\Controllers\SeatController::class, 'store']);


Route::get('/hall/{id}', [\App\Http\Controllers\HallController::class, 'show']);
Route::put('/hall/{id}', [\App\Http\Controllers\HallController::class, 'update']);
Route::get('/hall', [\App\Http\Controllers\HallController::class, 'index']);
Route::post('/hall', [\App\Http\Controllers\HallController::class, 'store']);
Route::delete('/hall/{id}', [\App\Http\Controllers\HallController::class, 'destroy']);

Route::get('/film/{id}', [\App\Http\Controllers\FilmController::class, 'show']);
Route::get('/film', [\App\Http\Controllers\FilmController::class, 'index']);
Route::post('/film', [\App\Http\Controllers\FilmController::class, 'store']);
Route::delete('/film/{id}', [\App\Http\Controllers\FilmController::class, 'update']);

//Route::apiResource('/seats', \App\Http\Controllers\SeatController::class);
//Route::apiResource('hall', \App\Http\Controllers\HallController::class);
