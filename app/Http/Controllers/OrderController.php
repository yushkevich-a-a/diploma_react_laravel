<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

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
        $text = $request->text_data;
        $image = \QrCode::format('png')->margin(1)->size(500)->encoding('UTF-8')->generate($text);
        $output_file = 'order/code/' . uniqid() . '.png';
        Storage::disk('public')->put($output_file, $image);
        $url = Storage::url($output_file);
        $order = Order::create([
            'session_id' => $request->session_id,
            'date_session' => $request->date_session,
            'url_code' => $url
        ]);

        
        return response()->json($order);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
//     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return response()->json([
            "status" => "метод показа заказа",
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
            "status" => "метод обновления заказа",
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
            "status" => "метод удаления заказа",
        ], 201);
    }
}
