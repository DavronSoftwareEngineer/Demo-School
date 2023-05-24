import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DrawerReight from '../../components/add-drawerReight'
import TableStudents from '../../components/tableStudents'
import CustomIcons from '../../components/customIcon'

export default function Students() {
  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}>
        <Typography variant='h5' sx={{
          fontWeight: "bold",
        }}>Talabalar</Typography>
        <Box>
          <DrawerReight/>
        </Box>
      </Box>
      <Box sx={{
        width: "100%",
        height: "2px",
        backgroundColor: "#fff",
        my: 2,
      }}/>
      <Box>
        <TableStudents/>  
      </Box>
      <Box sx={{
        mt: 1,
        px: 2,
        py: 1,
        borderRadius: "5px",
        boxShadow: 2,
        display: "flex", 
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#fff',
      }}>
        <Typography>Malumotlar 15 dan 35 gacha, 234 ta dan</Typography>
        <CustomIcons/>
      </Box>
    </Box>
  )
}
