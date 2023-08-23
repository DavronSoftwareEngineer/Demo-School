import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grey } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import Avatar from '@mui/material/Avatar';
import logo from './photo/logo.png';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { BsCollection } from "react-icons/bs";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "30px",
  border: '1px solid #607d8b',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: grey[800],
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Layout() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);

  const handleOpenUserMenu1 = (event) => {
    setAnchorElUser1(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu1 = () => {
    setAnchorElUser1(null);
  };

  const [showDrawer, setShowDrawer] = React.useState(false);
  const handle = useFullScreenHandle()
  const menus = useSelector((state => state.menus))
  const accounts = useSelector((state) => state.accounts)
  return (
    <FullScreen handle={handle}>
    <Box sx={{ display: 'flex'}}>
      <Box>
      <AppBar position="fixed" 
      sx={{
      backgroundColor: "#fff"
      }}>
        <Toolbar sx={{py: 1}}>
          <Search sx={{display: {xs: "none", sm: "none", md: "block", lg: "block", xl: "block"}}}>
            <SearchIconWrapper>
              <SearchIcon sx={{color: grey[800]}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton
            onClick={() => setShowDrawer(showDrawer ? false : true)} 
            sx={{mr: 1.5, 
              display: {xs: "flex", sm: 'none', md: "none", lg: "none", xl: "none"}
            }}>{showDrawer ? <CloseIcon sx={{color: "#000"}}/> : <BsCollection style={{color: "#000"}}/>}</IconButton>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: {xs: "start", sm: "start", md: 'center', lg: "center", xl: "center"}, }}>
            <img src={logo} width={"200px"} height={"100%"} alt="" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{display: {xs: "none", sm: "flex", md: "flex", lg: 'flex', xl: "flex"}}}>
            <IconButton size="large" onClick={handleOpenUserMenu1} aria-label="show 4 new mails" color="inherit">
              <LanguageOutlinedIcon sx={{color: "#455a64"}}/>
            </IconButton>
            <Menu
              sx={{ mt: '45px', display: "flex", alignItems: "center" }}
              id="menu-appbar"
              anchorEl={anchorElUser1}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser1)}
              onClose={handleCloseUserMenu1}
            >
              <MenuItem onClick={handleCloseUserMenu1}>
                <Typography>RUS</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu1}>
                <Typography>UZB</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu1}>
                <Typography>ENG</Typography>
              </MenuItem>
            </Menu>
            </Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{mr: 1.5, cursor: "pointer"}}
              onClick={handle.active ? handle.exit : handle.enter}
            >
              {handle.active ? <ZoomInMapIcon sx={{color: "#455a64"}}/> :<ZoomOutMapOutlinedIcon sx={{color: "#455a64"}}/>}
            </IconButton>
            <Box sx={{zIndex: 1}}>
            <Button variant="text" 
              endIcon={<ExpandMoreIcon 
              sx={{
              color: '#000',
              transform: anchorElUser ? "rotate(180deg)" : "",
              transition: "0.5s",
              }}/>} onClick={handleOpenUserMenu} 
              sx={{ py: 0, pl: 0, pr: 1,
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: grey[300],
                }
              }}>
                <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=e2ddd41338ea5768fa11d4569295e2ba48fa4567-8265302-images-thumbs&n=13" />
            </Button>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {accounts.map((item, index) => (
                <NavLink key={index} to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: '#000',
                    paddingLeft: "20px",
                    paddingRight: "30px",
                  }}
                  onClick={handleCloseUserMenu}>
                  <Box sx={{mt: 1}}>{item.icon}</Box>
                  <Typography textAlign="center" sx={{px: 3, color: index === 4 ? "red" : ""}}>{item.title}</Typography>
                </NavLink>
              ))}
            </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: {xs: '100%', sm: '250px', md: "150px", lg: '150px', xl: "150px"},
          flexShrink: 0,
          boxShadow: 5,
          zIndex: 1,
          display: {xs: showDrawer ? "block": "none", sm: "block", md: 'block', lg: "block", xl: "block"},
          position: {xs: "absolute", sm: 'static', md: "static", lg: "static", xl: "static"},
          left: 0,
          top: 0,
          [`& .MuiDrawer-paper`]: { width: {xs: '100%', sm: '250px', md: "150px", lg: '150px', xl: "150px"}, boxSizing: 'border-box'},
        }}
      >
        <Toolbar/>
        <Box sx={{ overflow: 'auto', mt: 2.2}}>
        <Box sx={{width: "100%", px: {xs: 1, sm: 0, md: 0, lg: 0, xl:0}, pt: {xs: 3, sm: 3, md: 0, lg: 0, xl: 0}, 
          pb: {xs: 1.5, sm: 2, md: 0, lg: 0, xl: 0}}}>
        <Search sx={{display: {xs: "block", sm: "block", 
          md: "none", lg: "none", xl: "none"},
          width: '100%' 
          }}>
            <SearchIconWrapper>
              <SearchIcon sx={{color: grey[800]}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
            {menus.map((item, index) => (
                <NavLink key={index} to={item.path}
                  onClick={() => setShowDrawer(false)}
                  style={
                  ({isActive}) => {
                    return {
                      display: "block",
                      textDecoration: "none",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      borderBottom: "1px solid #e0e0e0",
                      marginLeft: "5px",
                      marginRight: "5px",
                      borderRadius : "5px",
                      marginBottom: "5px",
                      backgroundColor: isActive  ? "#e0e0e0" : "",
                    }
                }}
                >
                  <Box sx={{display: "flex", justifyContent: "center"}}>{item.icon}</Box>
                  <Typography textAlign={"center"} color={grey[700]}
                  fontSize={"16px"} fontWeight={600}
                  >{item.title}</Typography>
                </NavLink>
            ))}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, px: 3, pt: 5, pb: 3, 
        minHeight: "100vh", 
        backgroundColor: grey[200],
        }}>
        <Toolbar />
        <Outlet/>
      </Box>
    </Box>
    </FullScreen>
  );
}
