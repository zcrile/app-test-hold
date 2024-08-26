import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCiudadForm from '../../Hooks/useCiudadForm';
import { Container, Typography, TextField, Select, MenuItem, Button, CircularProgress, Alert } from '@mui/material';

const CiudadForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
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
  } = useCiudadForm(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      handleUpdate().then(() => navigate('/ciudades'));
    } else {
      handleCreate().then(() => navigate('/ciudades'));
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isEditing ? 'Editar Ciudad' : 'Agregar Ciudad'}
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
          disabled={!regionId}
        >
          <MenuItem value="">Seleccionar provincia</MenuItem>
          {filteredProvincias.map((provincia) => (
            <MenuItem key={provincia.id} value={provincia.id}>
              {provincia.nombre}
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

export default CiudadForm;
