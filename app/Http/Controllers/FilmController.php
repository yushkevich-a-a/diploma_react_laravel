<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Hall;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreFilmRequest;

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
    public function store(StoreFilmRequest $request)
    {

        $validated = $request->validated();

        $path = $request->file('poster')->store('images', 'public');
        $url = asset(Storage::url($path));

        $film = Film::create([
            'description' => $validated['description'],
            'title' => $validated['title'],
            'url' => $url,
            'path' => $path,
            'country' => $validated['country'],
            'duration' => $validated['duration'],
        ]);


        return response()->json([
            "status"=>"success",
            "data"=>Film::all(),
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
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Film  $film
    * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {

        $film = Film::firstWhere('id', $id);
        Storage::delete($film->path);
        if (!$film->delete()) {
            return response('not found', 404);
        }

        return response()->json([
            "status" => "success"
        ],201);
    }
}
