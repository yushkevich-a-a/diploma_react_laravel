<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Hall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Film::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('poster')) {
            $path = $request->file('poster')->store('images', 'public');
            $url = asset(Storage::url($path));
        }
        // if (Film::firstWhere('title', $request->title)) {
        //     return response('фильм с таким названием уже существует', 409);
        // }
        $film = Film::create([
            'description' => $request->description,
            'title' => $request->title,
            'url' => $url,
            'path' => $path,
            'country' => $request->country,
            'duration' => $request->duration,
        ]);


        return response()->json([
            "status"=>"success",
            "data"=>$this->index(),
            ], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return Film::firstWhere('id', $id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Film  $film
//     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Film $film)
    {
        return response()->json([
            'state' => 'здесь типа изменение состояния фильма, редактирование',
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Film  $film
//     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {

        $film = Film::firstWhere('id', $id);
        Storage::delete($film->path);
        if (!$film->delete()) {
            return response('not found', 404);
        }

        return response()->json([
            "state" => "success"
        ],201);
    }
}
