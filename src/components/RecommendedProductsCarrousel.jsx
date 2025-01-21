import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import { useSearchStore } from '../storeZustand/authStore';

export const RecommendedProductsCarousel = () => {
  const products = useSearchStore((state) => state.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Detectar cuántos elementos mostrar según el tamaño de la ventana
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1); // 3 en escritorio, 1 en móvil
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
    return <div>No products available</div>;
  }

  return (
    <div className="relative w-84% flex flex-col justify-center items-center m-12 animate-shadowColorChange rounded-lg" >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0 mt-9">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in border">
            Recommended Products
          </h2>
        </div>
        <div className="w-full md:w-2/3 relative max-w-6xl overflow-hidden bg-opacity-5 p-4 rounded-lg">
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
                <div className="bg-white shadow-md rounded-lg p-4 m-2 w-60 transform transition-transform duration-300 hover:scale-105 ">
                  <img src={product.src} alt={product.title} className="w-full h-32 object-cover rounded-t-lg" />
                  <div className="p-4 ">
                    <h2 className="text-lg font-bold mb-2">{product.title}</h2>
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
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black p-2 rounded-full"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProductsCarousel;