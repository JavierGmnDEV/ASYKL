
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useModalStore } from '../storeZustand/authStore';

const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useModalStore();

  return (
    <Modal open={isContactModalOpen} onClose={closeContactModal}>
      <Box sx={{ bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 3, maxWidth: "400px", mx: "auto", mt: 10 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Contact Us</Typography>
        <TextField
          label="Name"
          type="text"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          type="text"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          type="text"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={closeContactModal}>
          Send
        </Button>
      </Box>
    </Modal>
  );
};

export default ContactModal;