const API_URL = 'http://localhost:8000/api';

const getCalles = async () => {
  try {
    const response = await fetch(`${API_URL}/calles`);
    if (!response.ok) {
      throw new Error("Error fetching calles");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getCalles', error);
  }
}

const getCalleById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/calles/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching calle by id");
    }
    return response.json();
  } catch (error) {
    console.error('Error en getCalleById', error);
  }
}

const createCalle = async (calle) => {
  try {
    const response = await fetch(`${API_URL}/calles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calle),
    });
    if (!response.ok) {
      throw new Error("Error al agregar nueva calle.");
    }
    return response.json();
  } catch (error) {
    console.error('Error en createCalle', error);
  }
};

const updateCalle = async (id, calle) => {
  try {
    const response = await fetch(`${API_URL}/calles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calle),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar calle");
    }
    return response.json();
  } catch (error) {
    console.error("Error actualizando calle", error);
  }
}

const deleteCalle = async (id) => {
  try {
    const response = await fetch(`${API_URL}/calles/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Error al eliminar calle");
    }
    return { message: 'Calle eliminada con éxito' };
  } catch (error) {
    console.error("Error en deleteCalle", error);
  }
}

export { getCalles, getCalleById, createCalle, updateCalle, deleteCalle };
