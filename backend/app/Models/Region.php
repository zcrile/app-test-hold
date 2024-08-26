<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    protected $fillable = ['nombre'];
    protected $table = 'regiones'; // para hacer referencia a tabla en base
    public function provincias()
    {
        return $this->hasMany(Provincia::class, 'region_id');
    }
}
