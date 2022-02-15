import React, { Component } from "react";
import logo from '../asset/img/logo.png';
import './nav.css';
import {Link} from 'react-router-dom';


class Nav extends Component{
    render(){
        return(  
          <nav className="Mainnav">
                  <div className="brand">
                      <Link to='/'>
                        <img className="logo" src={logo} alt=""></img>  
                      </Link>
                          <p> <b>Senper</b> Graphics </p>
                  </div>
      
                  <div className="buttons ">
      
                    <Link to="/order">
                        <button className="nav-btn-order"  >
                            Order
                        </button> 
                    </Link>
                      
      
                    <Link to="/about">
                        <button className="nav-btn-order"  >
                            About us
                        </button> 
                    </Link>
                    
                  </div>
              </nav>
        );
    }
}

export default Nav;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { createTheme,ThemeProvider } from '@mui/material/styles';
// import './nav.css';
// import logo from '../asset/img/logo.png';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const theme = createTheme({
//     palette: {
//       primary: {
//         light: '#474747',
//         main: '#ffffff',
//         dark: '#002884',
//         contrastText: '#121212',
//       },
//       secondary: {
//         light: '#474747',
//         main: '#474747',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });


// const Nav = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//         <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//                 <Box
//                        noWrap
//                        component="div"
//                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//                     component="img"
//                     sx={{
//                     height: 35,
//                     }}
//                     alt="Your logo."
//                     src={logo}
//                 />

//              {/* <img className="logo" src={logo} alt=""></img> */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                   color: 'gray',
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center" sx={{color:'gray'}}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             LOGO
//           </Typography> */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="https://www.google.com/search?q=will+smith&sxsrf=APq-WBtfvW21IzxY6fMcE_5Zc_qq0rjN8w:1644489926362&tbm=isch&source=iu&ictx=1&vet=1&fir=1uLIKQULmaODYM%252C3JdgIyl91tBCGM%252C%252Fm%252F0147dk%253B5vVjyeNWbiMJSM%252CbjvrHMpBanAkFM%252C_%253BFGVZw2HRGF81KM%252Cp7D2iI7cH2TBgM%252C_%253BpUjDIR-nN3VPuM%252C22gJ2j4vrONBfM%252C_%253BWcFOC8VwQviRQM%252C30nsD5jHHc63TM%252C_%253BFPaEFYgUHqcHUM%252CUmP5iMphw7OjOM%252C_%253BAojsfq_y-I24iM%252CtKuNMh7Y3xz5XM%252C_&usg=AI4_-kSRCzScGjukptuILpBn2_ICRG6CCQ&sa=X&ved=2ahUKEwjgqpav-vT1AhVTuKQKHVwSA2gQ_B16BAgWEAE#imgrc=1uLIKQULmaODYM" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </ThemeProvider>
//   );
// };
// export default Nav;
