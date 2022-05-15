<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'title',
        'image_url',
        'country',
        'duration',
    ];

    public function session()
    {
        return $this->hasToMany(Session::class);
    }
}
