import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TeacherSelect() {
  const [course, setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Rol tanlang</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Kursni tanlang"
          onChange={handleChange}
        >
          <MenuItem value={10} sx={{
            fontSize: "14px",
            width: "200px",
          }}>CEO drektor</MenuItem>
          <MenuItem value={20}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Admin</MenuItem>
          <MenuItem value={30}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Kassir</MenuItem>
          <MenuItem value={40}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Operator</MenuItem>
          <MenuItem value={50}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Teacher</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}
