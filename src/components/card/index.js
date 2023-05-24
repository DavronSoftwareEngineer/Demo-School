import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import CountUp from 'react-countup';

export default function AreaCard({icon, title, result}) {
  return (
    <Card sx={{ width: "100%", boxShadow: 3, py: 2}}>
        <Box sx={{
            mb: 3,
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>{icon}</Box>
            <Typography variant='body1' sx={{
                textAlign: "center",
            }}>{title}</Typography>
        </Box>
        <Box>
            <Typography variant='h6' sx={{
                textAlign: "center",
            }}>
                <CountUp end={result} duration={5}/>
            </Typography>
        </Box>
    </Card>
  );
}
