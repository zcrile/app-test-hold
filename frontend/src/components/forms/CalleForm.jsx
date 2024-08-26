import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCalleForm from '../../Hooks/useCalleForm';
import { Container, Typography, TextField, Select, MenuItem, Button, CircularProgress, Alert } from '@mui/material';

const CalleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
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
  } = useCalleForm(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      handleUpdate().then(() => navigate('/calles'));
    } else {
      handleCreate().then(() => navigate('/calles'));
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isEditing ? 'Editar Calle' : 'Agregar Calle'}
      </Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <TextField
          label="Region"
          select
          variant="outlined"
          fullWidth
          margin="normal"
          value={regionId}
          onChange={(e) => setRegionId(e.target.value)}
          required
        >
          <MenuItem value="">Seleccionar region</MenuItem>
          {regiones.map((region) => (
            <MenuItem key={region.id} value={region.id}>
              {region.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Provincia"
          select
          variant="outlined"
          fullWidth
          margin="normal"
          value={provinciaId}
          onChange={(e) => setProvinciaId(e.target.value)}
          required
        >
          <MenuItem value="">Seleccionar provincia</MenuItem>
          {filteredProvincias.map((provincia) => (
            <MenuItem key={provincia.id} value={provincia.id}>
              {provincia.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Ciudad"
          select
          variant="outlined"
          fullWidth
          margin="normal"
          value={ciudadId}
          onChange={(e) => setCiudadId(e.target.value)}
          required
        >
          <MenuItem value="">Seleccionar ciudad</MenuItem>
          {filteredCiudades.map((ciudad) => (
            <MenuItem key={ciudad.id} value={ciudad.id}>
              {ciudad.nombre}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          {isEditing ? 'Actualizar' : 'Crear'}
        </Button>
        {isEditing && (
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={handleDelete}
            style={{ marginTop: '1rem' }}
          >
            Eliminar
          </Button>
        )}
      </form>
    </Container>
  );
};

export default CalleForm;
