<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Seat;

class Hall extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'VIP_price',
        'usual_price',
        'on_sale',
        'rows',
        'places'
    ];

    protected $casts = [
        'on_sale' => 'boolean',
    ];

    public function seats()
    {
        return $this->hasMany(Seat::class);
    }

}
