<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;
use \App\Models\Hall;
use \App\Models\Seat;
use \App\Models\Film;
use \App\Models\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Антон',
            'email' => 'e@e.ru',
            'password' => Hash::make('12345'),
        ]);

        Hall::factory()->count(3)->create();

        $halls = Hall::all();
        foreach($halls as $hall) {
            $row = $hall->rows;
            $places = $hall->places;
            $amount = $row * $places;
            for($i = 1; $i <= $amount; $i++) {
                Seat::factory()->count(1)->create([
                    'hall_id' => $hall->id,
                    'number_seat' => $i,
                ]);
            }
        }

        Film::factory()->count(5)->create();

        $films = Film::get();
        
        foreach($halls as $key=>$hall) {
            $film = $films[$key];
            $start_session = rand(0, 1000);
            $finish_session = $start_session + $film->duration;

            Session::factory()->create([
                'hall_id' => $hall->id,
                'film_id' => $film->id,
                'duraton_session' => $film->duration,
                'start_session' => $start_session,
                'finish_session' => $finish_session,
            ]);
        }

    }
}
