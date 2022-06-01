<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Film;
use App\Models\Hall;
use App\Models\Session;

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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
