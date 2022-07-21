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
        return response()->json([
            "status" => "success",
            "data" => Hall::all(),
            ], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
     */
    public function store(HallRequest $request)
    {
        $hall_id = Hall::create($request->validated());
        $hall = Hall::firstWhere('id', $hall_id->id);

        return response()->json([
            "status" => "success",
            "data" => Hall::all(),
            ], 201);
    }

    /**
     * Display the specified resource.
     *
    * @param  \Index\Models\Hall  $hall
    * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $response_data = Hall::findOrFail($id);
        if(!$response_data) {
            return $response_data;
        }
        $response_data->seats = $response_data->seats;

        return response()->json([
            "status" => "success",
            "data" => $response_data,
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
        if (isset($request->reqData['VIP_price']) && isset($request->reqData['usual_price'])) {
            if ($request->reqData['VIP_price'] <= 0 || $request->reqData['usual_price'] <= 0)
            {
                return response()->json([
                    'status' => 'error',
                    'data' => "значение полей цены не может быть меньше нуля",
                ], 201);
            }
            if (($request->reqData['VIP_price']) < ($request->reqData['usual_price']))
            {
                return response()->json([
                    'status' => 'error',
                    'data' => "стоимость VIP мест не может быть меньше обычных",
                ], 201);
            }
        }

        foreach( $request->reqData as $key=>$value) {
            $hall[$key] = $value;
        }
        $hall->save();
        return response()->json([
            'status' => 'success',
            'data' => $hall,
        ], 201);
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
            "status" => "success",
            "data" => Hall::all(),
        ], 201);
    }
}
