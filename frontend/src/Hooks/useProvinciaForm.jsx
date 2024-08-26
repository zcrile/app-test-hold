import { useState, useEffect } from 'react';
import { getProvinciaById, createProvincia, updateProvincia, deleteProvincia } from '../services/provinciaService';
import { getRegiones } from '../services/regionService';
import { useNavigate, useParams } from 'react-router-dom';

const useProvinciaForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [regionId, setRegionId] = useState('');
  const [regiones, setRegiones] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const regionesData = await getRegiones();
        setRegiones(regionesData);

        if (id) {
          setIsEditing(true);
          const provincia = await getProvinciaById(id);
          setNombre(provincia.nombre);
          setRegionId(provincia.region_id);
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

  const handleCreate = async () => {
    try {
      setLoading(true);
      await createProvincia({ nombre, region_id: regionId });
      navigate('/provincias');
    } catch (error) {
      setError('Error al crear la provincia');
      console.error('Error al crear la provincia:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await updateProvincia(id, { nombre, region_id: regionId });
      navigate('/provincias');
    } catch (error) {
      setError('Error al actualizar la provincia');
      console.error('Error al actualizar la provincia:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('¿Seguro de eliminar provincia?')) {
      try {
        setLoading(true);
        await deleteProvincia(id);
        navigate('/provincias');
      } catch (error) {
        setError('Error al eliminar la provincia');
        console.error('Error al eliminar la provincia:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return {
    nombre,
    setNombre,
    regionId,
    setRegionId,
    regiones,
    isEditing,
    loading,
    error,
    handleDelete,
    handleSubmit,
  };
};

export default useProvinciaForm;
