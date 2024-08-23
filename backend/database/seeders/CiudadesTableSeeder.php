<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CiudadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ciudades')->insert([
            ['nombre' => 'Talcahuano' ,'provincia_id' => 1],
            ['nombre' => 'Hualpen' ,'provincia_id' => 1],
            ['nombre' => 'Candelaria' ,'provincia_id' => 1],
            ['nombre' => 'pueblo123' ,'provincia_id' => 2],
            ['nombre' => 'Providencia' ,'provincia_id' => 3],
            ['nombre' => 'Freire' ,'provincia_id' => 4],
        ]);
    }
}
