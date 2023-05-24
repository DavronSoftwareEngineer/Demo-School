import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Courses1Select() {
  const [course, setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size='small'>
        <InputLabel id="demo-simple-select-label">Kursni tanlang</InputLabel>
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
          }}>Targitolog</MenuItem>
          <MenuItem value={20}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Front-End</MenuItem>
          <MenuItem value={30}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Beck-End</MenuItem>
          <MenuItem value={40}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >3D MAX</MenuItem>
          <MenuItem value={50}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >SMM</MenuItem>
          <MenuItem value={60}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >UI-UX</MenuItem>
          <MenuItem value={70}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >IOS</MenuItem>
          <MenuItem value={70}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Android</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
