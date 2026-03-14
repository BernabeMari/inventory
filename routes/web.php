<?php

use App\Http\Controllers\ItemController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Models\Item;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::controller(ItemController::class)->group(function(){
    Route::get('/', 'adminPage')->name('admin.page');
    Route::post('/', 'create_item')->name('create_item');
});