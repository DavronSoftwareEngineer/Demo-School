import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';

export default function RadioButtons() {
  const [value, setValue] = React.useState('Naqt pul');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        // sx={{display: 'flex'}}
      >
        <Box sx={{display: 'flex'}}>
          <FormControlLabel value="Naqt pul" control={<Radio />} label="Naqt pul" />
          <FormControlLabel value="Payme" control={<Radio />} label="Payme" />
        </Box>
        <Box sx={{display: 'block'}}>
          <FormControlLabel value="Plastik karta" control={<Radio />} label="Plastik karta" />  
          <FormControlLabel value="Click" control={<Radio />} label="Click" />
        </Box>
        <Box>
          <FormControlLabel value="Bank xisobi" control={<Radio />} label="Bank xisobi" />
          <FormControlLabel value="Apelsin" control={<Radio />} label="Apelsin" />
        </Box>
      </RadioGroup>
    </FormControl>
  );
}
