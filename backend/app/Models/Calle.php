<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calle extends Model
{
    protected $fillable = ['nombre', 'ciudad_id'];

    public function ciudad()
    {
        return $this->belongsTo(Ciudad::class, 'ciudad_id');
    }
    public function provincia()
    {
        //provincia a traves de ciudad
        return $this->ciudad->provincia();
    }
    public function region()
    {
        //regiona travez de provincia
        return $this->ciudad->provincia->region();
    }
}


