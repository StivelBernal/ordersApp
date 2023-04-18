<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;

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


Route::group(['prefix' => 'customers'], function($router) {
    Route::get("/all", [CustomerController::class, 'index']);
    Route::post("/add", [CustomerController::class, 'store']);
});

Route::group(['prefix' => 'orders'], function($router) {
    Route::get("/all", [OrderController::class, 'index']);
    Route::get("/id/{id}", [OrderController::class, 'getForId']);
    Route::get("/searchOrder", [OrderController::class, 'searchOrder']);
    Route::post("/add", [OrderController::class, 'store']);
});
