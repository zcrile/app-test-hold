import { useEffect, useState } from 'react';
import { getProvincias } from '../services/provinciaService';
import { getRegiones } from '../services/regionService';

const useProvinciaList = () => {
  const [provincias, setProvincias] = useState([]);
  const [filteredProvincias, setFilteredProvincias] = useState([]);
  const [regiones, setRegiones] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provinciasData = await getProvincias();
        setProvincias(provinciasData);
        setFilteredProvincias(provinciasData);
        
        const regionesData = await getRegiones();
        setRegiones(regionesData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const filtered = provincias.filter(provincia => provincia.region_id === parseInt(selectedRegion, 10));
      setFilteredProvincias(filtered);
    } else {
      setFilteredProvincias(provincias);
    }
  }, [selectedRegion, provincias]);

  return {
    provincias,
    filteredProvincias,
    regiones,
    selectedRegion,
    setSelectedRegion
  };
};

export default useProvinciaList;
