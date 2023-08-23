import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CoursesSelect() {
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
          }}>Rus tili - Shahzoda Abdullayiva - 08:00</MenuItem>
          <MenuItem value={20}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >SMM - Ezoza Abdullayiva - 08:00</MenuItem>
          <MenuItem value={30}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >3D's MAX - Muhammadillo Xakimov - 08:00</MenuItem>
          <MenuItem value={40}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Motion Grafika - Muhammadillo Xakimov - 08:00</MenuItem>
          <MenuItem value={50}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Motion Grafika - Asal Ilyosboyiva - 08:00</MenuItem>
          <MenuItem value={60}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >3D's MAX - Muhammadillo Xakimov - 08:00</MenuItem>
          <MenuItem value={70}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >3D's MAX - Muhammadillo Xakimov - 08:00</MenuItem>
          <MenuItem value={70}
          sx={{
            fontSize: "14px",
            width: "200px",
          }}
          >Arab tili - Umarali SHohtorayev - 08:00</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
