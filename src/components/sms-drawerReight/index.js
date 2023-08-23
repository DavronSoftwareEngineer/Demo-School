import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IconButton, TextField, Tooltip, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtons from '../radioButton';
import InputBases from '../inputBase';


export default function SmsDrawerReight ({icon, text}) {
  const [value, setValue] = React.useState("");
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450, p: 2 }}
      role="presentation"
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
            <Typography sx={{fontWeight: "bold", color: grey[600]}}>Talabaga SMS yuborish</Typography>
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
        <Box sx={{display: "flex", 
        mb: 2,
      }}>
          <Typography sx={{mr: 1, fontWeight: "bold"}}>Yuboruvchi</Typography>
          <Typography sx={{fontWeight: "bold"}}>3700</Typography>
        </Box>
        <Box>
        <TextField
          id="outlined-multiline-static"
          label="Xabarni kiriting"
          multiline
          rows={4}
          fullWidth
          value={value}
          />
          <Typography>0 ta belgi</Typography>
        </Box>
        <Box>
          <Typography sx={{
            fontWeight: "bold",
            my: 3
          }}>SMS Shablonlari</Typography>
          <Box>
            <Box sx={{
              p: 2,
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 1,
              cursor: 'pointer'
            }}>
              <Typography onClick={() => 
                setValue("Assalomu alaykum iltimos, to'lovni vaqtida amalga oshiring")}
                sx={{
                  fontSize: "14px",
                }}
                >Assalomu alaykum iltimos, to'lovni vaqtida amalga oshiring</Typography>
            </Box>
            <Box sx={{
              p: 2,
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 1,
              mt: 2,
              cursor: 'pointer'
            }}>
              <Typography onClick={() => 
                setValue("Assalomu alaykum iltimos, to'lovni vaqtida amalga oshiring")}
                sx={{
                  fontSize: "14px",
                }}
                >Assalomu alaykum, webinarda qatnashganingizdan xursanmiz</Typography>
            </Box>
            <Box sx={{
              p: 2,
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 1,
              mt: 2,
              cursor: 'pointer'
            }}>
              <Typography onClick={() => 
                setValue("Assalomu alaykum iltimos, to'lovni vaqtida amalga oshiring")}
                sx={{
                  fontSize: "14px",
                }}
                >Assalomu alaykum, siz kutayotgan guruh ochildi! Batafsil https://</Typography>
            </Box>
            <Box sx={{
              p: 2,
              backgroundColor: "#fff",
              boxShadow: 3,
              borderRadius: 1,
              mt: 2,
              cursor: 'pointer'
            }}>
              <Typography onClick={() => 
                setValue("Assalomu alaykum iltimos, to'lovni vaqtida amalga oshiring")}
                sx={{
                  fontSize: "14px",
                }}
                >Assalomu alaykum, Bugungi bayram bilan sizni o'z jamoyimiz bilan qutlaymiz</Typography>
            </Box>
          </Box>
        </Box>
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
          <Tooltip title={text} placement='right'>
          <IconButton variant='contained' 
            onClick={toggleDrawer(anchor, true)}
            sx={{
                textTransform: "none"
            }}
            >{icon}</IconButton>
          </Tooltip>
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
