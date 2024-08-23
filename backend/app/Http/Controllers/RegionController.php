<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region;

class RegionController extends Controller
{
    // obtener todas las regiones
    public function index()
    {
        return Region::all();
    }
    
        //crear una region
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:30',
        ]);

        $region = Region::create($request->all());
        return response()->json([
            'message' => 'Region creada con exito',
            'data' => $region
        ], 201);
    }

    // obtener regio por id
    public function show($id)
    {
        return Region::findOrFail($id);
    }

    // updatear region
    public function update(Request $request, $id)
    {
        $region = Region::findOrFail($id);
        $request->validate([
            'nombre' => 'required|string|max:30',
        ]);
        $region->update($request->all());
        return response()->json([
            'message' => 'Region actualizada con exito',
            'data' => $region
        ], 200);
    }

    // eliminar region
    public function destroy($id)
{
    $region = Region::findOrFail($id); // verifica id antes de eliminar

    $region->delete(); 

    return response()->json([
        'message' => 'Región eliminada con éxito',
        'data' => $region 
    ], 200); 
}
}