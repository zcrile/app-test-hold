<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CiudadesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('ciudades')->insert([
            ['nombre' => 'Concepcion', 'provincia_id' => 1],
            ['nombre' => 'Talcahuano', 'provincia_id' => 1],
            ['nombre' => 'Arauco2', 'provincia_id' => 2],
            ['nombre' => 'BioBio2', 'provincia_id' => 3],
            ['nombre' => 'Ñuble2', 'provincia_id' => 4],
            ['nombre' => 'Temuco', 'provincia_id' => 5],
            ['nombre' => 'Villarrica', 'provincia_id' => 5],
            ['nombre' => 'Angol', 'provincia_id' => 6],
            ['nombre' => 'Melipeuco', 'provincia_id' => 6],
            ['nombre' => 'LautaroCity', 'provincia_id' => 7],
            ['nombre' => 'Osorno', 'provincia_id' => 8],
            ['nombre' => 'Valdivia', 'provincia_id' => 9],
            ['nombre' => 'Castro', 'provincia_id' => 10],
            ['nombre' => 'Puerto Varas', 'provincia_id' => 11],
            ['nombre' => 'Llanquihue2', 'provincia_id' => 12],
            ['nombre' => 'Santiago', 'provincia_id' => 13],
            ['nombre' => 'Puente Alto', 'provincia_id' => 14],
            ['nombre' => 'San Bernardo', 'provincia_id' => 15],
            ['nombre' => 'Colina', 'provincia_id' => 16],
            ['nombre' => 'Santiago2', 'provincia_id' => 17],
            ['nombre' => 'Iquique', 'provincia_id' => 18],
            ['nombre' => 'Alto Hospicio', 'provincia_id' => 19],
        ]);
    }
}
