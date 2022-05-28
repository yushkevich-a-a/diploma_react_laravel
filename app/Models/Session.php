<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;

    protected $fillable = [
        'hall_id',
        'film_id',
        'duraton_session',
        'start_session',
        'finish_session',
    ];

    public function hall()
    {
        return $this->belongsTo(Hall::class);
    }

    public function film()
    {
        return $this->belongsTo(Film::class);
    }

    public function order()
    {
        return $this->hasToMany(Order::class);
    }


}
