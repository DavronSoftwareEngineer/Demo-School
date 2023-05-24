import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import CountUp from 'react-countup';

export default function CoursesCard({item}) {
  return (
    <Card sx={{ width: "100%", boxShadow: 3, py: 2}}>
        <Box sx={{
            mb: 3,
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <img width={"200px"} height={"150px"} src="https://leverageedu.com/blog/wp-content/uploads/2020/04/Free-Online-Courses-with-Certificates-1.png" alt="" />
            </Box>
        </Box>
        <Box>
            <Typography variant='h6' sx={{
                textAlign: "center",
                fontWeight: 'bold'
            }}>{item.title}</Typography>
            <Typography variant='h6' sx={{
                textAlign: "center",
            }}>
                {item.price} so'm
            </Typography>
        </Box>
    </Card>
  );
}
