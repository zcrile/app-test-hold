<?php

namespace App\Http\Controllers;

use App\Models\Ciudad;
use Illuminate\Http\Request;

class CiudadController extends Controller
{
    public function index()
    {
        return Ciudad::with('provincia')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:30',
            'provincia_id' => 'required|exists:provincias,id',
        ]);

        $ciudad = Ciudad::create($request->all());

        return response()->json($ciudad, 201);
    }

    public function show($id)
    {
        return Ciudad::with('provincia')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $ciudad = Ciudad::findOrFail($id);
        $request->validate([
            'nombre' => 'required|string|max:30',
            'provincia_id' => 'required|exists:provincias,id',
        ]);

        $ciudad->update($request->all());

        return response()->json($ciudad, 200);
    }

    public function destroy($id)
    {
        Ciudad::destroy($id);

        return response()->json(null, 204);
    }
}
