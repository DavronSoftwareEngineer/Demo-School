import { Box, Grid } from '@mui/material'
import React from 'react'
import AreaCard from '../../components/card'
import { useSelector } from 'react-redux'

export default function Home() {
  const homePage = useSelector((state) => state.homePage);
  return (
    <Box sx={{display: 'flex', justifyContent: "center"}}>
      <Grid container spacing={2} justifyContent={"center"}>
        {homePage.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={index}>
            <AreaCard icon={item.icon} title={item.title} result={item.result}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
