<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Order::paginate();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Order::firstWhere('title', $request->title)) {
            return response('фильм с таким названием уже существует', 409);
        }

        $session = Order::create([
            'session_id' => $request->session_id,
            'qr_code' => $request->qr_code,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
//     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return response()->json([
            "state" => "метод показа заказа",
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
//     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        return response()->json([
            "state" => "метод обновления заказа",
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
//     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        return response()->json([
            "state" => "метод удаления заказа",
        ], 201);
    }
}
