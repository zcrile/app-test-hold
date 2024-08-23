<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProvinciasTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('provincias')->insert([
            ['nombre' => 'Concepcion', 'region_id' => 1],
            ['nombre' => 'San Pedro', 'region_id' => 1],
            ['nombre' => 'Valdivia', 'region_id' => 2],
            ['nombre' => 'Santiago', 'region_id' => 3],
            ['nombre' => 'Temuco', 'region_id' => 4],
        ]);
    }
}
