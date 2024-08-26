import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRegionById, createRegion, updateRegion, deleteRegion } from '../services/regionService';

const useRegionForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const fetchRegion = async () => {
        try {
          const region = await getRegionById(id);
          setNombre(region.nombre);
        } catch (error) {
          console.error('Error al cargar la region:', error);
        }
      };
      fetchRegion();
    }
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (isEditing) {
        await updateRegion(id, { nombre });
      } else {
        await createRegion({ nombre });
      }
      navigate('/regiones'); 
    } catch (error) {
      console.error('Error al guardar la region:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteRegion(id);
      navigate('/regiones');
    } catch (error) {
      console.error('Error al eliminar la region:', error);
    }
  };

  return {
    nombre,
    setNombre,
    isEditing,
    handleSubmit,
    handleDelete,
  };
};

export default useRegionForm;