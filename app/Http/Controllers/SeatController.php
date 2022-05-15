<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        var_dump('index');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
//     * @return boolean
     */
    public function store(Request  $request)
    {
        $this->destroy($request->id);
        $number_seat = 1;
        foreach ($request->seats as $seat){
            if($seat['enable']) {
                $seat['number_seat'] = $number_seat;
                $number_seat++;
            } else {
                $seat['number_seat'] = 0;
            }
            Seat::create($seat);
        }

        return response()->json([
            "state" => "success",
        ], 201);
    }

    /**
     * Display the specified resource.
     *
//     * @param  \App\Models\Seat  $seat
//     * @return \Illuminate\Http\Response
     */
    public function show(int  $id)
    {
        return Seat::where('hall_id', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seat  $seat
     * @return \Illuminate\Http\Response
     */
    public function edit(Seat $seat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Seat  $seat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Seat $seat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Seat  $seat
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $hall_id)
    {
        Seat::where('hall_id', $hall_id)->delete();
    }
}
