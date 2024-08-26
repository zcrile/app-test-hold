import React from 'react';
import useRegionForm from '../../Hooks/useRegionForm';
import { TextField } from '@mui/material';
import FormButtons from '../FormButtons';

const RegionForm = () => {
  const { nombre, setNombre, isEditing, handleSubmit, handleDelete } = useRegionForm();

  return (
    <div>
      <h1>{isEditing ? 'Editar Region' : 'Agregar Region'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Nombre"
            variant="outlined"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
        </div>
        <FormButtons isEditing={isEditing} handleDelete={handleDelete} />
      </form>
    </div>
  );
};

export default RegionForm;
