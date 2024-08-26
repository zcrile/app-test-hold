import React from 'react';
import { Button } from '@mui/material';

const FormButtons = ({ isEditing, handleDelete }) => {
  return (
    <>
      <Button type="submit" variant="contained" color="primary">
        {isEditing ? 'Actualizar' : 'Crear'}
      </Button>
      {isEditing && (
        <Button
          type="button"
          onClick={handleDelete}
          variant="contained"
          color="error"
          style={{ marginLeft: '10px' }}
        >
          Eliminar
        </Button>
      )}
    </>
  );
};

export default FormButtons;