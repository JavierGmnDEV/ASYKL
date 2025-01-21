import { Box, Typography, Button } from '@mui/material';
import { useModalStore } from '../storeZustand/authStore';
import ContactModal from './ContactModal';

const AboutUs = () => {
  const { openContactModal } = useModalStore();

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6, mt: 4 }} id='about-section'>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flex: 1, textAlign: 'center', mb: { xs: 4, md: 0 } }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            MÁS INFORMACIÓN
          </Typography>
          <Typography variant="body1" mb={2}>
            Teléfono: +53 55041870
          </Typography>
          <Typography variant="body1" mb={2}>
            Email: info@ASCYKL.com
          </Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center', mb: { xs: 4, md: 0 } }}>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">SOBRE NOSOTROS</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">CÓMO FUNCIONAMOS?</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">TÉRMINOS Y CONDICIONES</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">DECLARACIÓN DE PRIVACIDAD</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">POLÍTICA DE DEVOLUCIONES</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">INFORMACIÓN DE ENVÍO</a></li>
          </ul>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={openContactModal}
            sx={{ py: 2, px: 4, borderRadius: '8px', backgroundColor: 'blue', '&:hover': { backgroundColor: 'primary.main' } }}
          >
            Contáctanos
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 8 }}>
        <Typography variant="body2">
          &copy; 2025 ASCYKL SERVICE & REPRESENTATION. Todos los derechos reservados.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </Box>
      </Box>
      {/* Modal de contacto */}
      <ContactModal />
    </Box>
  );
};

export default AboutUs;