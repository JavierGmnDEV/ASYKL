import { Box } from '@mui/material';
import logo from '../images/logo-removebg.webp'

const RouteTransition = ({ show }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: show ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,
        opacity: show ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out'
      }}
    >
      <img src={logo} alt="Logo" style={{ width: 100, height: 100 }} className='w-28 h-28' />
      <h2 className='text-white'>Cargando...</h2>
    </Box>
  );
};

export default RouteTransition;
