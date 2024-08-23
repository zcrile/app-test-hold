<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RegionesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('regiones')->insert([
            ['nombre' => 'Biobio'],
            ['nombre' => 'Lagos'],
            ['nombre' => 'Metropolitana'],
            ['nombre' => 'Araucania'],
        ]);
    }
}
