import React from 'react';
import { Container, Typography, TextField, MenuItem, Button, CircularProgress, Alert } from '@mui/material';
import useProvinciaForm from '../../Hooks/useProvinciaForm';

const ProvinciaForm = () => {
  const {
    nombre,
    setNombre,
    regionId,
    setRegionId,
    regiones,
    isEditing,
    loading,
    error,
    handleDelete,
    handleSubmit
  } = useProvinciaForm();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        {isEditing ? 'Editar Provincia' : 'Agregar Provincia'}
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
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
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

export default ProvinciaForm;
