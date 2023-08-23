import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddCoursesDrawerReight from '../../components/addCourses-drawerReight'
import CoursesCard from '../../components/cardCourses'
import { getCourses } from '../../api';

export default function Courses() {

  const [data, setData] = useState([]);

    const getCourse = async () => {  
      const res = await getCourses();
      console.log(res);
      setData(res.data)
     }
    
    useEffect(() => {
      getCourse();
    }, []);

  return (
    <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}>
        <Typography variant='h5' sx={{
          fontWeight: "bold",
        }}>Kurslar</Typography>
        <Box>
          <AddCoursesDrawerReight/>
        </Box>
      </Box>
      <Box sx={{
        width: "100%",
        height: "2px",
        backgroundColor: "#fff",
        my: 2,
      }}/>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CoursesCard item={item}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
