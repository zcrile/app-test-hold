<?php

namespace App\Http\Controllers;

use App\Models\Calle;
use Illuminate\Http\Request;

class CalleController extends Controller
{
    public function index()
    {
        return Calle::with('ciudad.provincia.region')->get();
    }
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:200',
            'ciudad_id' => 'required|exists:ciudades,id',
        ]);
        try {
            $calle = Calle::create($request->all());
            \Log::info('Calle creada:', $calle->toArray()); 
            return response()->json($calle, 201);
        } catch (\Exception $e) {
            \Log::error('Error al crear la calle:', ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Error al crear la calle'], 500);
        }
    }

    public function show($id)
    {
        return Calle::with('ciudad')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $calle = Calle::findOrFail($id);
        $request->validate([
            'nombre' => 'required|string|max:200',
            'ciudad_id' => 'required|exists:ciudades,id',
        ]);

        $calle->update($request->all());

        return response()->json($calle, 200);
    }

    public function destroy($id)
    {
        Calle::destroy($id);

        return response()->json(null, 204);
    }
}
