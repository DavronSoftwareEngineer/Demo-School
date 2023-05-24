import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';

export default function RadioButtonsCourses() {
  const [value, setValue] = React.useState('Online');

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
          <FormControlLabel value="Online" control={<Radio />} label="Online" />
          <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
          <FormControlLabel value="Video kurs" control={<Radio />} label="Video kurs" />        
      </RadioGroup>
    </FormControl>
  );
}
