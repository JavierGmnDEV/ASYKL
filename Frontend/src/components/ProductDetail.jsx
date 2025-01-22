import  { useState } from 'react';
import { Box, Grid, Typography, Table, TableBody, TableRow, TableCell, TextField, Button, Modal } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    src: "https://th.bing.com/th/id/R.0e9bfbaadeba38edf3bbf19c5a5552b3?rik=yrN2KXfOPa6TLQ&pid=ImgRaw&r=0",
    title: "Egg Container",
    description: "12-unit egg container, ideal for keeping your eggs fresh and organized.",
    quantity_per_container: "12 units",
    price_per_sack: "$29.99",
    price_per_kg: "$2.99",
    container_quantity: "10 containers",
    discount: "20%",
  },
  {
    id: 2,
    src: "https://th.bing.com/th/id/OIP.U9rSmASvcU7ihbiTrEq6_gHaFD?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Whole Milk",
    description: "1-liter whole milk, rich in nutrients and perfect for your breakfast.",
    quantity_per_container: "1 liter",
    price_per_sack: "$14.90",
    price_per_kg: "$1.49",
    container_quantity: "20 containers",
    discount: "10%",
  },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    setOpen(false);
    navigate("/confirm");
  };

  const product = data.find((item) => item.title === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", minHeight: "80vh", p: 3 }} className="mt-6 justify-center justify-items-center">
      <Grid container spacing={4} alignItems="center" sx={{ maxWidth: "900px", bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 0, border: 0 }}>
        
        {/* Imagen del producto */}
        <Grid item xs={12} md={6}>
          <img src={product.src} alt={product.title} style={{ width: "100%", borderRadius: "8px" }} />
        </Grid>

        {/* Detalles del producto */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>

          {/* Tabla de especificaciones */}
          <Table sx={{ mt: 3 }}>
            <TableBody>
              <TableRow>
                <TableCell><strong>Quantity per Container</strong></TableCell>
                <TableCell align="right">{product.quantity_per_container}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Price per Sack</strong></TableCell>
                <TableCell align="right">{product.price_per_sack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Price per Kg</strong></TableCell>
                <TableCell align="right">{product.price_per_kg}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Container Quantity</strong></TableCell>
                <TableCell align="right">{product.container_quantity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Discount</strong></TableCell>
                <TableCell align="right">{product.discount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Botón de solicitud */}
          <Button variant="contained" color="primary" sx={{ mt: 3, width: "100%" }} onClick={handleOpen}>
            Request
          </Button>
        </Grid>
      </Grid>

      {/* Modal de solicitud */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ bgcolor: "white", p: 4, borderRadius: 2, boxShadow: 3, maxWidth: "400px", mx: "auto", mt: 10 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Request Product</Typography>

          <TextField
            label="Quantity"
            type="number"
            fullWidth
            sx={{ mb: 2 }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <TextField
            label="Number"
            type="tel"
            fullWidth
            sx={{ mb: 2 }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

          <TextField
            label="Company"
            type="text"
            fullWidth
            sx={{ mb: 3 }}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Send
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductDetail;