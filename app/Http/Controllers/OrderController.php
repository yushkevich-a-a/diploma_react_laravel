<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class OrderController extends Controller
{
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

        foreach($request->selectSeats as $seat) {
            Ticket::create([
                'order_id' => $order->id,
                'number_seat' => $seat['number_seat'],
            ]);
            // return response()->json($seat);
        }

        
        return response()->json($order);
    }
}
