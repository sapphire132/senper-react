import React, { useEffect, useState } from 'react';
import logo from '../asset/img/logo.png';
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  IconButton,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import profile from '../asset/img/avatar.jpg';

const theme = createTheme({
  palette: {
    primary: {
      light: '#474747',
      main: '#474747',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#474747',
      main: '#474747',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Nav = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  useEffect(() => {
    let authToken = sessionStorage.getItem('AuthToken');

    if (authToken) {
      navigate('/order');
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    setAnchorElUser(null);
    navigate('/login');
  };
  return (
    <ThemeProvider theme={theme}>
      <nav className='Mainnav'>
        <div className='brand'>
          <Link to='/'>
            <img className='logo' src={logo} alt=''></img>
          </Link>
          <p>
            {' '}
            <b>Senper</b> Graphics{' '}
          </p>
        </div>

        <div className='buttons '>
          <Link to='/order'>
            <Button
              variant='outlined'
              size='small'
              margin='normal'
              sx={{
                margin: '0px 7px',
              }}
            >
              order
            </Button>
          </Link>

          <Link to='/about'>
            <Button
              variant='outlined'
              size='small'
              margin='normal'
              sx={{
                margin: '0px 7px',
              }}
            >
              About us
            </Button>
          </Link>

          {/* <Button 
                      variant="contained" 
                      size="small" 
                      margin="normal" 
                      onClick={handleLogout}
                      sx={{
                        margin: "10px"
                    }}
                    >
                      Logout
                </Button> */}

          <Box sx={{ flexGrow: 0, display: 'inline' }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: '35px', height: '35px', margin: '0px 10px' }}
                  alt='Remy Sharp'
                  src={profile}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
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
              <MenuItem onClick={handleLogout}>
                <Typography textAlign='center'>Log Out</Typography>
              </MenuItem>

              <MenuItem>
                <Link to='/profile'>profile</Link>
              </MenuItem>

              <MenuItem>
                <Link to='/upload'>Add Project</Link>
              </MenuItem>
            </Menu>
          </Box>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Nav;
