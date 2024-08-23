<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    protected $fillable = ['nombre', 'provincia_id'];   
    public function provincia()
    {
        return $this->belongsTo(Provincia::class);
    }
    public function calles()
    {
        return $this->hasMany(Calle::class);
    }
}
