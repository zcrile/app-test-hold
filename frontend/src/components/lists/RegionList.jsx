import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Button } from '@mui/material';
import { getRegiones } from '../../services/regionService';
import { useNavigate } from 'react-router-dom';

const RegionList = () => {
  const [regiones, setRegiones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegiones = async () => {
      try {
        const data = await getRegiones();
        setRegiones(data);
      } catch (error) {
        console.error('Error al cargar las regiones:', error);
      }
    };
    fetchRegiones();
  }, []);

  const handleAgregar = () => {
    navigate('/regiones/new');
  };

  return (
    <Paper style={{ padding: 16, margin: '16px auto', maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Regiones
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAgregar} style={{ marginBottom: '16px' }}>
        Agregar Region
      </Button>
      <List>
        {regiones.map(region => (
          <ListItem button key={region.id} onClick={() => navigate(`/regiones/${region.id}/edit`)}>
            <ListItemText primary={region.nombre} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RegionList;
