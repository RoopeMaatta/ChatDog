import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const RoundedTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    borderRadius: '50px', // Make the text field round
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '50px', // Round the border when using variant="outlined"
  },
  '& .MuiInputLabel-root': {
    borderRadius: '50px', // If needed, you can round the label as well
  },
}));

export default RoundedTextField