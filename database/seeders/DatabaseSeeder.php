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

        Film::factory()->create([
            'title' => 'Звёздные войны XXIII: Атака клонированных клонов',
            'description' => 'Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.',
            'url' => 'http://127.0.0.1:8000/images/dart-clones.webp',
            'path' => 'images/dart-clones.jpg',
            'country' => 'США',
            'duration' => '130',
        ]);

        Film::factory()->create([
            'title' => 'Альфа',
            'description' => '20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.',
            'url' => 'http://127.0.0.1:8000/images/alpha.jpg',
            'path' => 'images/alpha.jpg',
            'country' => 'Франция',
            'duration' => '96',
        ]);

        
        Film::factory()->create([
            'title' => 'Хищник',
            'description' => 'Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.',
            'url' => 'http://127.0.0.1:8000/images/predator.webp',
            'path' => 'images/predator.jpg',
            'country' => 'Канада, США',
            'duration' => '101',
        ]);




        $films = Film::get();
        
        foreach($halls as $key => $hall) {
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
