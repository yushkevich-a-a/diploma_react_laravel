<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'hall_id',
        'is_VIP',
        'enable',
        'number_seat',
    ];

    protected $casts = [
        'is_VIP' => 'boolean',
        'enable' => 'boolean',
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
