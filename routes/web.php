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
    Route::put('/admin/{id}', 'update_item')->name('update_item');
    Route::delete('/admin/{id}', 'delete_item')->name('delete_item');
});