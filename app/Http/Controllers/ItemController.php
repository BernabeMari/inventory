<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Inertia\Inertia;

class ItemController extends Controller
{
    public function adminPage(){
        $items = Item::all();
        $test = Item::all();
        return inertia('AdminDashboard/Index', compact('items' , 'test'));
    }

    public function create_item(Request $request){
        $items = $request->validate([
            'product_name' => 'required',
            'quantity' => 'required',
        ]);
        Item::create($items);
        return redirect()->route('admin.page');
    }

    public function show_item(){
        $items = Item::all();
        return Inertia::render('AdminDashboard/Index', ['items' => $items]);
    }

    public function show_test(){
        $test = Item::all();
        return Inertia::render('AdminDashboard/Index', ['test' => $test]);
    }
}