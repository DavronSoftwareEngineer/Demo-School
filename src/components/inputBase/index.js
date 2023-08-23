import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function InputBases() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', 
      display: 'flex', 
      alignItems: 'center', 
      width: "100%",
        border: `1px solid ${grey[400]}`,
        boxShadow: 0,
    }}
    >
      <Typography sx={{px: 1, 
        // backgroundColor: grey[400],
        height: "100%",
        }}>+998</Typography>
        <Divider orientation="vertical" flexItem sx={{color: grey[700]}}/>
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Telefon nomer"
      />
    </Paper>
  );
}
