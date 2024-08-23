<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CallesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     
     *
     * @return void
     */
    public function run()
    {
        DB::table('calles')->insert([
            ['nombre' => 'calle123', 'ciudad_id' => 1], 
            ['nombre' => 'calle asd hola chao', 'ciudad_id' => 1], 
            ['nombre' => 'calle12calle y pasaje nuevo 12343', 'ciudad_id' => 1], 
            ['nombre' => 'calle hola hola', 'ciudad_id' => 2],
            ['nombre' => 'calle 123 456', 'ciudad_id' => 3],
            ['nombre' => 'calle nueva', 'ciudad_id' => 4],
        ]);
    }
}
