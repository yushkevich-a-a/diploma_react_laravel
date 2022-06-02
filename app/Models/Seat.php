<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Hall;
use App\Models\Ticket;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'hall_id',
        'status',
        'number_seat',
    ];


    public function hall()
    {
        return $this->belongsTo(Hall::class);
    }

    public function ticket()
    {
        return $this->hasToMany(Ticket::class);
    }

}
