<?php

namespace App\Http\Controllers;

use App\Models\Provincia;
use Illuminate\Http\Request;

class ProvinciaController extends Controller
{
    public function index()
    {
        return Provincia::with('region')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:30',
            'region_id' => 'required|exists:regiones,id',
        ]);

        $provincia = Provincia::create($request->all());

        return response()->json($provincia, 201);
    }

    public function show($id)
    {
        return Provincia::with('region')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $provincia = Provincia::findOrFail($id);
        $request->validate([
            'nombre' => 'required|string|max:30',
            'region_id' => 'required|exists:regiones,id',
        ]);

        $provincia->update($request->all());

        return response()->json($provincia, 200);
    }

    public function destroy($id)
    {
        Provincia::destroy($id);

        return response()->json(null, 204);
    }

    public function getByRegion($regionId)
    {
        return Provincia::where('region_id', $regionId)->with('region')->get();
    }
}
