import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IconButton, TextField, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtons from '../radioButton';
import InputBases from '../inputBase';
import RadioButtons1 from '../RadioButton1';
import RadioButtonsCourses from '../RadioButtonCourses';
import Courses1Select from '../courses1-select';


export default function AddCoursesDrawerReight () {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350, p: 2 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, true)}
    >
      <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
            <ErrorIcon sx={{color: grey[500], mr: 1}}/>
            <Typography sx={{fontWeight: "bold", color: grey[600]}}>Yangi kurs qo'shish</Typography>
        </Box>
        <IconButton onClick={toggleDrawer(anchor, false)}><CloseIcon/></IconButton>
      </Box>
      <Box sx={{
        backgroundColor: grey[300],
        height: "2px",
        mt: 1,
        mb: 2,
      }} />
      
      <Box>
        <TextField type='text' id="outlined-basic" 
          label="Nomi" variant="outlined"
          size='small' fullWidth
          sx={{
            mb: 2
          }} />
          <Box><RadioButtonsCourses/></Box>
          <Box sx={{my: 3}}><Courses1Select/></Box>
          <TextField type='text' id="outlined-basic" 
          label="Narxi" variant="outlined"
          size='small' fullWidth
          sx={{
            mb: 2
          }} />
          <TextField
          id="outlined-multiline-static"
          label="Tavsif"
          multiline
          rows={4}
          fullWidth
          />
          <Button variant='contained' 
            size='medium' sx={{mt: 2}} 
            >Yuborish</Button>
      </Box>
    </Box>
  );

  return (
    <div >
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant='contained' 
            onClick={toggleDrawer(anchor, true)}
            sx={{
                textTransform: "none"
            }}
            >Yangi kurs qo'shish</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
