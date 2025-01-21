import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import { useSearchStore } from '../storeZustand/authStore';
import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { DirectionsBoat } from '@mui/icons-material';

export const Carousel = () => {
  const products = useSearchStore((state) => state.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Detect how many items to show based on window size
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1); // 3 on desktop, 1 on mobile
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? Math.max(products.length - itemsPerPage, 0) : newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  if (products.length === 0) {
    return (
      <div className="relative flex justify-center items-center h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://img.freepik.com/foto-gratis/vista-aerea-buque-carga-contenedor-carga-mar_335224-1372.jpg?t=st=1737427385~exp=1737430985~hmac=81dd28f7c51fe8ace61f9d866da4d943eadc530a29760259d667eae08b1bd2ef&w=900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      ></div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => Navigate('/ecommerce')}
        sx={{ py: 2, px: 4, fontSize: '1.5rem', zIndex: 1 }}
      >
        <DirectionsBoat  className='m-1'/>
          únete
      </Button>
    </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${products[currentIndex]?.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          zIndex: -1,
        }}
      ></div>
      <div className="relative w-full max-w-6xl overflow-hidden bg-opacity-5 p-4 rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${itemsPerPage === 3 ? 'w-1/3' : 'w-full'
                } flex justify-center items-center`}
            >
              <div className="bg-white shadow-md rounded-lg p-4 m-2 w-80">
                <img src={product.src} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <p className="text-gray-700 mb-2">{`Quantity per Container: ${product.quantity_per_container}`}</p>
                  <p className="text-gray-700 mb-2">{`Price per Sack: ${product.price_per_sack}`}</p>
                  <p className="text-gray-700 mb-2">{`Price per Kg: ${product.price_per_kg}`}</p>
                  <p className="text-gray-700 mb-2">{`Container Quantity: ${product.container_quantity}`}</p>
                  <p className="text-gray-900 font-bold">{product.price}</p>
                  <p className="text-red-500">{product.discount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-full">
          <ArrowBackIosNewIcon />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;