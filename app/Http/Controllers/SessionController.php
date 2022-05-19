<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Session;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Session::paginate();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Session::firstWhere('title', $request->title)) {
            return response('временные параметры сессии выбраны неверно ', 409);
        }
        $session = Session::create([
            'halls_id' => $request->halls_id,
            'films_id' => $request->films_id,
            'start_session' => $request->start_session,
            'finish_session' => $request->finish_session,
        ]);


        return $session;
    }

    /**
     * Display the specified resource.
     *
//     * @param  \Index\Models\Session  $session
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return Session::firstWhere('id', $id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Session  $session
//     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Session $session)
    {
        return response()->json([
            "state" => "метод изменение сессии",
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Session  $session
//     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if (!Session::destroy($id)) {
            return response('not found', 404);
        }
        return response()->json([
            "state" => "success"
        ],201);
    }
}
