import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { getCiudades } from '../../services/ciudadService';
import { getProvincias } from '../../services/provinciaService';
import { useNavigate } from 'react-router-dom';
import { StyledTableCell, StyledTableRow } from '../../styles/TablasLists'


const CiudadList = () => {
  const [ciudades, setCiudades] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const data = await getProvincias();
        setProvincias(data);
      } catch (error) {
        console.error('Error al cargar las provincias:', error);
      }
    };

    fetchProvincias();
  }, []);

  useEffect(() => {
    const fetchCiudades = async () => {
      try {
        const data = await getCiudades();
        setCiudades(data);
      } catch (error) {
        console.error('Error al cargar las ciudades:', error);
      }
    };

    fetchCiudades();
  }, []);

  const handleAgregar = () => {
    navigate('/ciudades/new');
  };

  const handleProvinciaChange = (event) => {
    setSelectedProvincia(event.target.value);
  };
  const filteredCiudades = ciudades.filter(ciudad => 
    selectedProvincia ? ciudad.provincia_id === parseInt(selectedProvincia, 10) : true
  );
  const provinciasMap = new Map(provincias.map(provincia => [provincia.id, provincia.nombre]));

  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h6" gutterBottom>
        Lista de Ciudades
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAgregar} style={{ marginBottom: '16px' }}>
        Agregar Ciudad
      </Button>
      <FormControl fullWidth style={{ marginBottom: '16px' }}>
        <InputLabel>Filtrar por Provincia</InputLabel>
        <Select
          value={selectedProvincia}
          onChange={handleProvinciaChange}
          label="Filtrar por Provincia"
        >
          <MenuItem value="">Todas</MenuItem>
          {provincias.map((provincia) => (
            <MenuItem key={provincia.id} value={provincia.id}>
              {provincia.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ciudad</StyledTableCell>
              <StyledTableCell>Provincia</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCiudades.map(ciudad => (
              <StyledTableRow
                key={ciudad.id}
                onClick={() => navigate(`/ciudades/${ciudad.id}/edit`)}
                style={{ cursor: 'pointer' }}
              >
                <StyledTableCell>{ciudad.nombre}</StyledTableCell>
                <StyledTableCell>{provinciasMap.get(ciudad.provincia_id) || 'Desconocida'}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CiudadList;
