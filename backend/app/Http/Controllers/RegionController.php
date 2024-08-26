<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region;

class RegionController extends Controller
{
    public function index()
    {
        return Region::all();
    }

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

    public function show($id)
    {
        return Region::findOrFail($id);
    }

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

    public function destroy($id)
    {
        $region = Region::findOrFail($id);

        $region->delete();

        return response()->json([
            'message' => 'Region eliminada con exito',
            'data' => $region
        ], 200);
    }
}