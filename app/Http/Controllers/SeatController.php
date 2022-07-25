<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use App\Models\Hall;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
    * @return boolean
     */
    public function store(Request  $request)
    {   
        $hall = Hall::firstWhere("id", $request->id);
        if ($hall->rows !== $request->rows || $hall->places !== $request->places) {
            // var_dump($$hall->rows !== $request->rows);
            $hall->rows = $request->rows;
            $hall->places = $request->places;
            $hall->save();
            foreach ($request->seats as $seat){
                Seat::create([
                    'hall_id' => $request->id,
                    'status' => $seat['status'],
                    'number_seat' => $seat['number_seat'],
                ]);
            }
        } else {
            var_dump($hall->rows !== $request->rows);
            foreach ($request->seats as $seat){
                $seatEdit = Seat::firstWhere('id', $seat['id']);
                $seatEdit->status = $seat['status'];
                $seatEdit->number_seat = $seat['number_seat'];
                $seatEdit->save();
            }
            unset($seatEdit);    
        }
        unset($seat);  

        $seats = Seat::where('hall_id', $request->id)->get();
        return response()->json([
            "status" => "success",
            "data" => $seats ,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
    * @param  int  $id
    * @return \Illuminate\Http\Response
     */
    public function show(int  $id)
    {
        $seats = Seat::where('hall_id', $id)->get();
        return response()->json([
            "status" => "success",
            "data" => $seats ,
        ], 201);
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
