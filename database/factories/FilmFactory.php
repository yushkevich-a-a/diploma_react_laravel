<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Provider\ru_RU\Address;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Film>
 */
class FilmFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->text(),
            'url' => $this->faker->imageUrl(640, 480),
            'path' =>  $this->faker->uuid(),
            'country' => $this->faker->country(),
            'duration' => $this->faker->numberBetween(50, 100),
        ];
    }
}
