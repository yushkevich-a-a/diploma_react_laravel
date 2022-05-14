<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hall extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'VIP_price',
        'usual_price',
        'on_sale',
    ];

    protected $casts = [
        'on_sale' => 'boolean',
    ];
}
