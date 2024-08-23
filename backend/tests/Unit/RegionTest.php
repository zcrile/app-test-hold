<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Region;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegionTest extends TestCase
{
    use RefreshDatabase;

    public function test_crear_region()
    {
        $region = Region::create(['nombre' => 'test Region']);
        $this->assertDatabaseHas('regiones', [
            'nombre' => 'test Region'
        ]);
    }
}
