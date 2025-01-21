import { useModalStore } from '../storeZustand/authStore';
import ContactModal from './ContactModal';

const LiquidationSection = () => {
  const { openContactModal } = useModalStore();

  return (
    <section className="relative w-full h-[750px] bg-[url('https://th.bing.com/th/id/R.ba19c807588b491c27c7f73f10f4ad3c?rik=P3FSuCk7hx27JQ&pid=ImgRaw&r=0')] bg-cover bg-center flex items-center">
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl px-6 text-white">
        <h1 className="text-2xl font-bold">ASCYXL SERVICE & REPRESENTATION INTERNATIONAL INC.</h1>
        <p className="mt-2 text-lg">
        La empresa ASCYXL SERVICE & REPRESENTATION está ubicada en el puerto de Mariel, Cuba, y se especializa en la importación de insumos por contenedores
        </p>
        <p className="mt-2 text-lg">
        . El puerto de Mariel es una infraestructura clave en Cuba, diseñada para manejar grandes volúmenes de carga y atraer inversiones extranjeras. 
        </p>
        <button
          className="px-6 py-2 mt-6 border border-white text-white font-semibold rounded hover:bg-gray-200 hover:text-black transition"
          onClick={openContactModal}
        >
          Contáctanos
        </button>
      </div>

      {/* Modal de contacto */}
      <ContactModal />
    </section>
  );
};

export default LiquidationSection;