<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Film;
use App\Models\Hall;
use App\Models\Session;
use App\Models\Ticket;
use App\Models\Order;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $films = Film::all();
        $halls = Hall::where('on_sale', true)->get();
        foreach($films as $film) {
            $film->halls;
            $hallsList = [];
            foreach($halls as $key=>$hall) {
                $film_id = $film->id;
                $hall_id = $hall->id;

                $sessions = Session::where('film_id', $film_id)
                    ->where('hall_id', $hall_id)
                    ->get();
                if($sessions->isEmpty()) {
                    continue;
                }
                $hall->sessions = $sessions;
                $hallsList[] = clone $hall;
            }
            $film->halls = $hallsList;
        }

        return response()->json($films, 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
    //  * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function dateSeans($id, $date)
    {
        $session = Session::firstWhere('id', $id);
        $session->film;
        $session->hall->seats;
        $orders = Order::where('session_id',$session->id)
        ->where('date_session', $date)->get();

        foreach ($session->hall->seats as &$seat) {
            foreach ($orders as $order) {
                $ticket = Ticket::where('order_id',$order->id)
                ->where('number_seat', $seat->number_seat)
                ->firstOr( function () {
                    return false;
                } );
                
                if ($ticket) {
                    $seat->status = 'taken';
                }
            }
        }

        return response()->json($session, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
