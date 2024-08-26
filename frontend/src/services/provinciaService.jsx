const API_URL = 'http://localhost:8000/api';

const getProvincias = async () => {
  try {
    const response = await fetch(`${API_URL}/provincias`);
    if (!response.ok) {
      throw new Error("Error fetching provincias");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getProvincias', error);
  }
}
const getProvinciaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/provincias/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching provincia by id");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getProvinciaById', error);
  }
}

const getProvinciasByRegion = async (regionId) => {
  try {
    const response = await fetch(`${API_URL}/provincias?region_id=${regionId}`);
    if (!response.ok) {
      throw new Error("Error fetching provincias by region");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getProvinciasByRegion', error);
  }
}

const createProvincia = async (provincia) => {
  try {
    const response = await fetch(`${API_URL}/provincias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(provincia),
    });
    if (!response.ok) {
      throw new Error("Error al agregar nueva provincia.");
    }
    return response.json();
  } catch (error) {
    console.error('Error en createProvincia', error);
  }
}
const updateProvincia = async (id, provincia) => {
  try {
    const response = await fetch(`${API_URL}/provincias/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(provincia),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar provincia");
    }
    return response.json();
  } catch (error) {
    console.error('Error actualizando provincia', error);
  }
}
const deleteProvincia = async (id) => {
  try {
    const response = await fetch(`${API_URL}/provincias/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Error al eliminar provincia");
    }
    return { message: 'Provincia eliminada con éxito' };
  } catch (error) {
    console.error('Error en deleteProvincia', error);
  }
}

export { getProvincias, getProvinciaById, createProvincia, updateProvincia, deleteProvincia,getProvinciasByRegion };
