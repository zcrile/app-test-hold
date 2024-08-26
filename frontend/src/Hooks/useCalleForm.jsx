import { useState, useEffect } from 'react';
import { getCalleById, createCalle, updateCalle, deleteCalle } from '../services/calleService';
import { getCiudades } from '../services/ciudadService';
import { getProvincias } from '../services/provinciaService';
import { getRegiones } from '../services/regionService';
import { useNavigate } from 'react-router-dom';

const useCalleForm = (id) => {
  const [nombre, setNombre] = useState('');
  const [regionId, setRegionId] = useState('');
  const [provinciaId, setProvinciaId] = useState('');
  const [ciudadId, setCiudadId] = useState('');
  
  const [regiones, setRegiones] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  
  const [filteredProvincias, setFilteredProvincias] = useState([]);
  const [filteredCiudades, setFilteredCiudades] = useState([]);
  
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

        const ciudadesData = await getCiudades();
        setCiudades(ciudadesData);

        if (id) {
          setIsEditing(true);
          const calle = await getCalleById(id);
          setNombre(calle.nombre);
          setCiudadId(calle.ciudad_id);

          const ciudadSeleccionada = ciudadesData.find(ciudad => ciudad.id === calle.ciudad_id);
          if (ciudadSeleccionada) {
            setProvinciaId(ciudadSeleccionada.provincia_id);
            const provinciaSeleccionada = provinciasData.find(provincia => provincia.id === ciudadSeleccionada.provincia_id);
            if (provinciaSeleccionada) {
              setRegionId(provinciaSeleccionada.region_id);
            }
          }
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
  }, [regionId, provincias]);

  useEffect(() => {
    if (provinciaId) {
      const filtered = ciudades.filter(ciudad => ciudad.provincia_id === parseInt(provinciaId, 10));
      setFilteredCiudades(filtered);
    } else {
      setFilteredCiudades([]);
    }
  }, [provinciaId, ciudades]);

  const handleCreate = async () => {
    try {
      setLoading(true);
      const response = await createCalle({ nombre, ciudad_id: ciudadId });
      console.log('calle creada:', response); 
    } catch (error) {
      setError('Error al crear la calle');
      console.error('Error al crear la calle:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleUpdate = async () => {
    try {
      setLoading(true);
      if (!ciudadId) {
        throw new Error('ciudad no seleccionada correctamente');
      }
      await updateCalle(id, { nombre, ciudad_id: ciudadId });
    } catch (error) {
      setError('Error al actualizar la calle');
      console.error('Error al actualizar la calle:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('¿Seguro de eliminar la calle?')) {
      try {
        setLoading(true);
        await deleteCalle(id);
        navigate('/calles')
      } catch (error) {
        setError('Error al eliminar la calle');
        console.error('Error al eliminar la calle:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    nombre, setNombre,
    regionId, setRegionId,
    provinciaId, setProvinciaId,
    ciudadId, setCiudadId,
    regiones,
    provincias,
    ciudades,
    filteredProvincias,
    filteredCiudades,
    isEditing,
    loading,
    error,
    handleCreate,
    handleUpdate,
    handleDelete
  };
};

export default useCalleForm;
