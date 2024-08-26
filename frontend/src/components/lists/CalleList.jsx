import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCalles } from '../../services/calleService';
import CustomTable from './CustomTable';

const CalleList = () => {
  const [calles, setCalles] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCalles = async () => {
      try {
        const data = await getCalles();
        setCalles(data);
      } catch (error) {
        console.error('Error al cargar las calles:', error);
      }
    };
    fetchCalles();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRowFocus = (id) => {
    navigate(`/calles/${id}/edit`);
  };

  const filteredCalles = calles.filter(calle =>
    calle.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { id: 'nombre', label: 'Nombre' },
    { id: 'ciudad', label: 'Ciudad' },
    { id: 'provincia', label: 'Provincia' },
    { id: 'region', label: 'Region' }
  ];

  const rows = filteredCalles.map(calle => ({
    id: calle.id,
    nombre: calle.nombre,
    ciudad: calle.ciudad?.nombre || 'Sin ciudad',
    provincia: calle.ciudad?.provincia?.nombre || 'Sin provincia',
    region: calle.ciudad?.provincia?.region?.nombre || 'Sin region'
  }));

  const handleRowClick = (id) => {
    navigate(`/calles/${id}/edit`);
  };

  return (
    <CustomTable
      rows={rows}
      columns={columns}
      search={search}
      onSearchChange={handleSearchChange}
      onRowClick={handleRowClick}
      onRowFocus={handleRowFocus}
    />
  );
};

export default CalleList;
