import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';

export default function RadioButtons1({radio1, radio2}) {
  const [value, setValue] = React.useState('Erkak');

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
        sx={{display: 'block'}}
      >
          <FormControlLabel value={radio1} control={<Radio />} label={radio1} />
          <FormControlLabel value={radio2} control={<Radio />} label={radio2} />
        
      </RadioGroup>
    </FormControl>
  );
}
