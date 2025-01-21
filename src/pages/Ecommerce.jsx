import { useEffect } from 'react';
import { useSearchStore } from '../storeZustand/authStore';
import { Carousel } from '../components/Carousel';
import Media from '../components/Media'; // Importar Media correctamente
import NavbarMaterial from '../components/NavbarMaterial';
import ScrollToTopButton from '../components/ScrollToUp';
import RecommendedProductsCarousel from '../components/RecommendedProductsCarrousel';
import { Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import AboutUs from '../components/AboutUs';

const data = [
  {
    src: 'https://th.bing.com/th/id/R.0e9bfbaadeba38edf3bbf19c5a5552b3?rik=yrN2KXfOPa6TLQ&pid=ImgRaw&r=0',
    title: 'Egg Container',
    description: '12-unit egg container, ideal for keeping your eggs fresh and organized.',
    quantity_per_container: '12 units',
    price_per_sack: '$29.99',
    price_per_kg: '$2.99',
    container_quantity: '10 containers',
    discount: '20%',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.U9rSmASvcU7ihbiTrEq6_gHaFD?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Whole Milk',
    description: '1-liter whole milk, rich in nutrients and perfect for your breakfast.',
    quantity_per_container: '1 liter',
    price_per_sack: '$14.90',
    price_per_kg: '$1.49',
    container_quantity: '20 containers',
    discount: '10%',
  },
  // Add other products similarly...
];

function Ecommerce() {
  const searchResults = useSearchStore((state) => state.searchResults);
  const setSearchResults = useSearchStore((state) => state.setSearchResults);
  const setProducts = useSearchStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(data); // Inicializar con todos los productos
    setSearchResults(data); // Inicializar con todos los productos
  }, [setProducts, setSearchResults]);

  return (
    <div>
      <NavbarMaterial />
      
      <Box id="search-section" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
        <SearchBar /> {/* Eliminar el prop onSearch */}
      </Box>
      {/* Main Content Area */}

      <Media data={searchResults.length > 0 ? searchResults : data} />
      <Carousel />
      <RecommendedProductsCarousel/>
      <ScrollToTopButton />
      <AboutUs id='about-section'/>
    </div>
  );
}

export default Ecommerce;