<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ticket::paginate();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
//     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json([
            "status" => "метод сохраниения билетов",
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
//     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        return response()->json([
            "status" => "метод показа билетов",
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ticket  $ticket
//     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ticket $ticket)
    {
        return response()->json([
            "status" => "метод изменения билетов",
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
//     * @return \Illuminate\Http\Response
     */
    public function destroy(Ticket $ticket)
    {
        return response()->json([
            "status" => "метод удаления билетов",
        ], 201);
    }
}
