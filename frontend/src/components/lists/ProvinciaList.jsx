import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import useProvinciaList from '../../Hooks/useProvinciaList'; 
import { StyledTableCell, StyledTableRow } from '../../styles/TablasLists'


const ProvinciaList = () => {
  const {
    filteredProvincias,
    regiones,
    selectedRegion,
    setSelectedRegion,
  } = useProvinciaList(); 

  const navigate = useNavigate();

  const handleAgregar = () => {
    navigate('/provincias/new');
  };

  const regionesMap = new Map(regiones.map(region => [region.id, region.nombre]));

  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h6" gutterBottom>
        Listado de Provincias
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAgregar} style={{ marginBottom: '16px' }}>
        Agregar Provincia
      </Button>
      <FormControl fullWidth style={{ marginBottom: '16px' }}>
        <InputLabel>Seleccionar Region</InputLabel>
        <Select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          label="Seleccionar Region"
        >
          <MenuItem value="">Todas las Regiones</MenuItem>
          {regiones.map((region) => (
            <MenuItem key={region.id} value={region.id}>
              {region.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Provincia</StyledTableCell>
              <StyledTableCell>Region</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProvincias.map(provincia => (
              <StyledTableRow
                key={provincia.id}
                onClick={() => navigate(`/provincias/${provincia.id}/edit`)}
                style={{ cursor: 'pointer' }}
              >
                <StyledTableCell>{provincia.nombre}</StyledTableCell>
                <StyledTableCell>{regionesMap.get(provincia.region_id) || 'Desconocida'}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProvinciaList;
