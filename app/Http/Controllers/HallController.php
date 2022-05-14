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
        return Hall::paginate();
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
            return response('зал с таким названием уже существует', 409);
        }
        $hall_id = Hall::create($request->validated());
        $hall = Hall::firstWhere('id', $hall_id->id);

        app('App\Http\Controllers\SeatController')->store($hall->id, $hall->rows, $hall->places);

        return $hall;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return Hall::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function edit(Hall $hall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Hall  $hall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hall $hall)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if (!Hall::destroy($id)) {
            return response('not found', 404);
        }
        return response('delete was successed', 201);;
    }
}
