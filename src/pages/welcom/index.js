import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Welcom() {
  return (
    <Box sx={{backgroundColor: '#e8eaf6', height: "100vh"}}>
        <Container sx={{height: "100%"}}>
          <Grid container justifyContent={"center"} 
            alignItems={"center"} height={"100%"}>
            <Grid item xs={10} sm={7} md={5} lg={4} xl={4} 
              sx={{
                boxShadow: 5,
                p: 3,
                borderRadius: 2,
              }}>
              <Box sx={{mb: 4}}>
                <Typography variant='h5' fontWeight={"bold"}>Sign In</Typography>
                <Typography>mod-me example</Typography>
              </Box>
              <TextField fullWidth size='small' 
                id="outlined-basic" label="Username" 
                variant="outlined" />
              <TextField fullWidth size='small' 
                id="outlined-basic" label="Password" 
                variant="outlined" 
                sx={{
                  my: 3,
                }}
                />
              <Link to={"/dashboard"} style={{
                display: "block",
                width: "100%",
                backgroundColor: "#2196f3",
                paddingTop: "5px",
                paddingBottom: "5px",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "20px",
                boxShadow: "5px",
                textAlign: "center",
              }}>Log in</Link>
            </Grid>
          </Grid>
        </Container>
    </Box>
  )
}
