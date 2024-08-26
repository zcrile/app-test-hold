<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinciasTableSeeder extends Seeder
{
    public function run()
    {

        DB::table('provincias')->truncate();
        DB::table('provincias')->insert([
            ['nombre' => 'Concepcion', 'region_id' => 1],
            ['nombre' => 'Arauco', 'region_id' => 1],
            ['nombre' => 'Ñuble', 'region_id' => 1],
            ['nombre' => 'BioBio', 'region_id' => 1],
            ['nombre' => 'Cautin', 'region_id' => 2],
            ['nombre' => 'Malleco', 'region_id' => 2],
            ['nombre' => 'Lautaro', 'region_id' => 2],
            ['nombre' => 'Osorno', 'region_id' => 3],
            ['nombre' => 'Valdivia', 'region_id' => 3],
            ['nombre' => 'Chiloe', 'region_id' => 3],
            ['nombre' => 'Llanquihue', 'region_id' => 3],
            ['nombre' => 'Santiago', 'region_id' => 4],
            ['nombre' => 'Cordillera', 'region_id' => 4],
            ['nombre' => 'Maipo', 'region_id' => 4],
            ['nombre' => 'Chacabuco', 'region_id' => 4],
            ['nombre' => 'Iquique', 'region_id' => 5],
            ['nombre' => 'Alto hospicio', 'region_id' => 5],
            ['nombre' => 'Tarapaca', 'region_id' => 5],
            ['nombre' => 'Huara', 'region_id' => 5],
                       
        ]);
    }
}
