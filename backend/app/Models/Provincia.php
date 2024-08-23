<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    protected $fillable = ['nombre', 'region_id'];  
    public function region()
    {
        return $this->belongsTo(Region::class);
    } 
    public function ciudades()
    {
        return $this->hasMany(Ciudad::class);
    }
}
