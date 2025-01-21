import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useAuthStore from '../storeZustand/authStore';
import { useGoogleLogin } from '@react-oauth/google';
import CloseIcon from '@mui/icons-material/Close';
import { Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = ['Sell', 'Requests', 'Documents', 'About'];
const settings = ['Logout'];

const NavbarMaterial = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseNavMenu = () => {
    setMenuOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: response => handleLoginSuccess(response),
    onError: response => handleLoginFailure(response),
  });

  const handleLoginSuccess = async (response) => {
    const accessToken = response.access_token;
    const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then(res => res.json());

    const user = {
      name: userInfo.name,
      email: userInfo.email,
      avatar: userInfo.picture,
    };
    login(user);
  };

  const handleLoginFailure = (error) => {
    console.error('Error al iniciar sesión con Google:', error);
  };

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
  };

  const handlePageNavigation = (page) => {
    switch (page) {
      
      case 'Home':
        navigate('/Home');
        break;
        case 'Sell':
        navigate('/ecommerce');
        break;
      
      case 'Requests':
        navigate('/solicitudes');
        break;
      case 'Documents':
        navigate('/confirm');
        break;
      case 'About':
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
        break;
      
      default:
        break;
    }
    handleCloseNavMenu();
  };

  return (
    <div className='z-50'>
      <AppBar position="static" sx={{ backgroundColor: 'white', zIndex: "1000", }} className='z-50'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', } }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon className='text-blue-800' />
              </IconButton>
            </Box>
            <Typography
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
                background: 'linear-gradient(90deg, blue, red)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ASCYKL SERVICE & REPRESENTATION
            </Typography>
          
            <Box sx={{ flexGrow: 0 }}>
              {isAuthenticated ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
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
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <IconButton onClick={() => googleLogin()} sx={{ color: 'white' }}>
                  <Typography variant="button" sx={{ background: 'rgb(234, 67, 53)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',}}>Login</Typography>
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
        <div onClick={handleCloseNavMenu} className={`fixed inset-0 bg-gray-700 bg-opacity-75 flex transition-transform duration-170 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
          <div className="bg-white min-w-48 max-w-56 h-full flex flex-col justify-center items-center relative">
            <div className='w-full h-20 flex justify-between' style={{ backgroundColor: '#1e90ff' }}>
              {isAuthenticated ? (
                <div className='flex justify-center items-center p-2'>
                  <div className=' text-xs '>
                    <div className=''>{user.name}</div>
                    <div className=''>{user.email}</div>
                  </div>
                </div>
              ) : (
                <IconButton onClick={() => googleLogin()} className="left-3 top-2 right-2">
                  <Typography className='text-white' variant="button">Login</Typography>
                </IconButton>
              )}
              <IconButton
                onClick={handleCloseNavMenu}
                className=" top-2 right-2 m-3"
              >
                <CloseIcon className='text-white' />
              </IconButton>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <Button
                key="Home"
                onClick={() => handlePageNavigation('Home')}
                className="my-2 text-black"
              >
                Home
              </Button>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageNavigation(page)}
                  className="my-2 text-black"
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default NavbarMaterial;