<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Llama a los seeders aquí
        $this->call([
            RegionesTableSeeder::class,
            ProvinciasTableSeeder::class,
            CiudadesTableSeeder::class,
            CallesTableSeeder::class,
        ]);
    }
}
