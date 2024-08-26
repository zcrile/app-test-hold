<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CallesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('calles')->truncate();
        DB::table('calles')->insert([
            // biobio
            ['nombre' => 'calle ohhigins', 'ciudad_id' => 1],
            ['nombre' => 'avenida colon', 'ciudad_id' => 1],
            ['nombre' => 'calle laja', 'ciudad_id' => 1],
            ['nombre' => 'calle consitucion', 'ciudad_id' => 1],
            ['nombre' => 'calle asd123456', 'ciudad_id' => 1], 
        
            // araucania
            ['nombre' => 'avendia alemania', 'ciudad_id' => 5],
            ['nombre' => 'calle pablo neruda', 'ciudad_id' => 5],
            ['nombre' => 'avda ohiggins', 'ciudad_id' => 5],
            ['nombre' => 'calle san francisco', 'ciudad_id' => 5],
            ['nombre' => 'calle usdfhfd3', 'ciudad_id' => 5], 
        
            // los lagos
            ['nombre' => 'calle ramon freire', 'ciudad_id' => 8],
            ['nombre' => 'avda artuuro pratt', 'ciudad_id' => 8],
            ['nombre' => 'calle san martin', 'ciudad_id' => 8],
            ['nombre' => 'calle del salvador', 'ciudad_id' => 8],
            ['nombre' => 'calle juegos olimpicos', 'ciudad_id' => 8], 
        
            // metropolitana
            ['nombre' => 'calle ahumada', 'ciudad_id' => 13],
            ['nombre' => 'avenida concha y toro', 'ciudad_id' => 13],
            ['nombre' => 'calle serrano', 'ciudad_id' => 13],
            ['nombre' => 'calle colina', 'ciudad_id' => 13],
            ['nombre' => 'calle asudh 4444 ', 'ciudad_id' => 13], 
        
            // tarapaca
            ['nombre' => 'avendia baquedano', 'ciudad_id' => 18],
            ['nombre' => 'calle patricio lynch', 'ciudad_id' => 18],
            ['nombre' => 'calle los olivos', 'ciudad_id' => 18],
            ['nombre' => 'calle san martin', 'ciudad_id' => 18],
            ['nombre' => 'calle mundial 2022', 'ciudad_id' => 18], 
        ]);
    }
}
