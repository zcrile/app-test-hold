
import { useState, useEffect } from 'react';
import { getCiudadById, createCiudad, updateCiudad, deleteCiudad } from '../services/ciudadService';
import { getProvincias } from '../services/provinciaService';
import { getRegiones } from '../services/regionService';
import { useNavigate } from 'react-router-dom';

const useCiudadForm = (id) => {
  const [nombre, setNombre] = useState('');
  const [regionId, setRegionId] = useState('');
  const [provinciaId, setProvinciaId] = useState('');
  const [regiones, setRegiones] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [filteredProvincias, setFilteredProvincias] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const regionesData = await getRegiones();
        setRegiones(regionesData);
        const provinciasData = await getProvincias();
        setProvincias(provinciasData);

        if (id) {
          setIsEditing(true);
          const ciudad = await getCiudadById(id);
          setNombre(ciudad.nombre);
          setProvinciaId(ciudad.provincia_id);
          setRegionId(ciudad.provincia.region_id);
        }
      } catch (error) {
        setError('Error al cargar datos');
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (regionId) {
      const filtered = provincias.filter(provincia => provincia.region_id === parseInt(regionId, 10));
      setFilteredProvincias(filtered);
    } else {
      setFilteredProvincias([]);
    }
  }, [provincias, regionId]);

  const handleCreate = async () => {
    try {
      setLoading(true);
      await createCiudad({ nombre, provincia_id: provinciaId });
    } catch (error) {
      setError('Error al crear la ciudad');
      console.error('Error al crear la ciudad:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await updateCiudad(id, { nombre, provincia_id: provinciaId });
    } catch (error) {
      setError('Error al actualizar la ciudad');
      console.error('Error al actualizar la ciudad:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('¿Seguro de eliminar la ciudad?')) {
      try {
        setLoading(true);
        await deleteCiudad(id);
        navigate('/ciudades')
      } catch (error) {
        setError('Error al eliminar la ciudad');
        console.error('Error al eliminar la ciudad:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    nombre, setNombre,
    regionId, setRegionId,
    provinciaId, setProvinciaId,
    regiones,
    provincias,
    filteredProvincias,
    isEditing,
    loading,
    error,
    handleCreate,
    handleUpdate,
    handleDelete
  };
};

export default useCiudadForm;
