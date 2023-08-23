import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./photo/logo.png";
export default function Welcom() {
  return (
    <Box
      sx={{
        backgroundColor: "#e8eaf6",
        height: "100vh",
      }}
    >
      <Container sx={{
        height: "100%",
      }}>
        <Grid
          container
          display={'flex'}
          justifyContent={"center"}
          alignItems={"center"}
          height={'100%'}
        >
          <Grid
            item
            xs={10}
            sm={7}
            md={5}
            lg={4}
            xl={4}
            sx={{
              boxShadow: 5,
              p: 3,
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <img
                src={logo}
                alt=""
                style={{
                  width: "100px",
                  height: "50px",
                  borderRadius: "5px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{
                my: 3,
              }}
            />
            <Link
              to={"/dashboard"}
              style={{
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
              }}
            >
              Log in
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
