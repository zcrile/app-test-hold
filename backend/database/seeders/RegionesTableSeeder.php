<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('regiones')->truncate();
        DB::table('regiones')->insert([
            ['nombre' => 'Biobio'],
            ['nombre' => 'Araucania'],
            ['nombre' => 'Lagos'],           
            ['nombre' => 'Metropolitana'],         
            ['nombre' => 'Tarapaca'],
        ]);
    }
}
