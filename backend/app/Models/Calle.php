<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calle extends Model
{
    protected $fillable = ['nombre', 'ciudad_id'];  
    public function ciudad()
    {
        return $this->belongsTo(Ciudad::class);
    }
}

