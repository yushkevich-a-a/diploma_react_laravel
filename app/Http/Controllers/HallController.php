<?php

namespace App\Http\Controllers;


use App\Http\Requests\HallRequest;
use App\Models\Hall;
use App\Models\Seat;
use Illuminate\Http\Request;

class HallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Hall::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
//     * @return \Illuminate\Http\Response
     */
    public function store(HallRequest $request)
    {
        if (Hall::firstWhere('name', $request->name)) {
            return response()->json([
                "status" => "error",
                "message" => "зал с таким названием уже существует",
            ], 201);
        }
        $hall_id = Hall::create($request->validated());
        $hall = Hall::firstWhere('id', $hall_id->id);

//        $amount_places = $hall->rows * $hall->places;
//
//        for($i = 1; $i <= $amount_places; $i++) {
//            Seat::create([
//                "hall_id" => $hall->id,
//                "number_seat" => $i,
//            ]);
//        }

        return response()->json([
            "status"=>"success",
            "data"=>Hall::all(),
            ], 201);
    }

    /**
     * Display the specified resource.
     *
//     * @param  \Index\Models\Hall  $hall
//     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $response_data = Hall::findOrFail($id);
        if(!$response_data) {
            return $response_data;
        }
        $response_data->seats = $response_data->seats;

        return response()->json([
            "state" => "success",
            "data"=>$response_data,
        ], 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hall  $hall)
    {
        $hall->VIP_price = $request->VIP_price;
        $hall->usual_price = $request->usual_price;
        $hall->save();
        return $hall;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy(int $id)
    {
        if (!Hall::destroy($id)) {
            return response('not found', 404);
        }
        return response()->json([
            "state" => "success",
            "data"=>Hall::all(),
        ], 201);
    }
}
