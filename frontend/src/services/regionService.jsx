
const API_URL = 'http://localhost:8000/api';

const getRegiones = async () => {
  try {
    const response = await fetch(`${API_URL}/regiones`);
    if (!response.ok) {
      throw new Error("Error fetchin regiones");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getRegiones', error);
  }
}

const getRegionById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/regiones/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching region by id");
    }
    return response.json();

  } catch (error) {
    console.error('Error en getRegionById', error);
  }

}

const createRegion = async (region) => {
  try {
    const response = await fetch(`${API_URL}/regiones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(region),
    });
    if (!response.ok) {
      throw new Error("Error al agregar nueva region.")
    }
    return response.json();
  } catch (error) {
    console.error('Error en createRegion', error);
  }
}

const updateRegion = async (id, region) => {
  try {
    const response = await fetch(`${API_URL}/regiones/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(region),
    })
    if (!response.ok){
      throw new Error("error al actualizar region");
    }
     return response.json();
  } catch (error) {
    console.error("Error actualizando region", error);
  }
}

const deleteRegion = async (id) => {

  try {
    const response = await fetch(`${API_URL}/regiones/${id}`,{
      method: 'DELETE',
    });
    if (!response.ok){
      throw new Error("Error al eliminar region");
    }
    return { message: 'Region eliminada con exito' };
  } catch (error) {
    console.error("Error en deleteRegion", error);
  }
}

export {getRegiones, getRegionById, createRegion, updateRegion, deleteRegion}