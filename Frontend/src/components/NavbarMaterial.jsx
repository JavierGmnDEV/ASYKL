import  { useState, useEffect } from 'react';
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
import RouteTransition from './ShowTransition';
import logo from '../images/logo-removebg.webp';

const pages = ['Sell', 'Requests', 'Documents', 'About'];
const settings = ['Logout'];

const NavbarMaterial = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [textStyle, setTextStyle] = useState({
    color: 'white',
  });
  const [iconColor, setIconColor] = useState('white');
  const [loginTextColor, setLoginTextColor] = useState('white');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor('white');
      setTextStyle({
        color: 'black',
      });
      setIconColor('black');
      setLoginTextColor('black');
    } else {
      setNavbarColor('transparent');
      setTextStyle({
        color: 'white',
      });
      setIconColor('white');
      setLoginTextColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        setShow(true);
        setTimeout(() => {
          navigate('/ecommerce');
          setShow(false);
        }, 1000);
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
      <RouteTransition show={show} />
      <AppBar position="fixed" style={{ backgroundColor: navbarColor, transition: 'background-color 0.5s' }} className='z-50'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: iconColor }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* Espacio para el logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 1 }}>
              <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
            </Box>

            <Typography
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
                ...textStyle,
              }}
            >
              ASCYKL SERVICES & LOGISTICS
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
                <IconButton onClick={() => googleLogin()} sx={{ color: loginTextColor }}>
                  <Typography variant="button" sx={{ color: loginTextColor }}>Login</Typography>
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