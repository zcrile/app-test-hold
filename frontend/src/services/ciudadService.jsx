const API_URL = 'http://localhost:8000/api';

const getCiudades = async () => {
  try {
    const response = await fetch(`${API_URL}/ciudades`);
    if (!response.ok) {
      throw new Error("Error fetching ciudades");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getCiudades', error);
  }
}

const getCiudadesByProvincia = async (provinciaId) => {
  try {
    const response = await fetch(`${API_URL}/provincias/${provinciaId}/ciudades`);
    if (!response.ok) {
      throw new Error("Error fetching ciudades by provincia");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getCiudadesByProvincia', error);
  }
}

const getCiudadById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/ciudades/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching ciudad by ID");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getCiudadById', error);
  }
}

const updateCiudad = async (id, ciudad) => {
  try {
    const response = await fetch(`${API_URL}/ciudades/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ciudad),
    });
    if (!response.ok) {
      throw new Error("Error actualizando ciudad");
    }
    return response.json();
  } catch (error) {
    console.error("Error actualizando ciudad", error);
  }
}

const createCiudad = async (ciudad) => {
  try {
    const response = await fetch(`${API_URL}/ciudades`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ciudad),
    });
    if (!response.ok) {
      throw new Error("Error al agregar nueva ciudad.");
    }
    return response.json();
  } catch (error) {
    console.error('Error en createCiudad', error);
  }
}

const deleteCiudad = async (id) => {
  try {
    const response = await fetch(`${API_URL}/ciudades/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Error eliminando ciudad");
    }
   
    const text = await response.text();
    if (text) {
      return JSON.parse(text);
    }
    return {}; 
  } catch (error) {
    console.error("Error en deleteCiudad", error);
  }
};

export { 
  getCiudades, 
  getCiudadesByProvincia, 
  createCiudad, 
  deleteCiudad, 
  getCiudadById, 
  updateCiudad 
};
