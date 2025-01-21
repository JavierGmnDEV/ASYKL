
const MaritimeTransport = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/olas-espumosas-superficie-agua-detras-crucero_181624-9229.jpg?t=st=1737426735~exp=1737430335~hmac=651be4ef01ee9739490407a351a30238bdf8051506d6c408fe4f78e3b0a52146&w=900')" }}
    >
      {/* Contenedor del contenido */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transporte marítimo
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Como una de las mayores empresas de transporte de contenedores del
            mundo, transportamos 12 millones de contenedores al año y los
            entregamos en todos los rincones del mundo.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Ver Productos
            </button>
            <button className="px-6 py-2 border border-white text-white font-semibold rounded hover:bg-gray-200 hover:text-black transition">
              Buscar Ofertas
            </button>
          </div>
        </div>
      </div>

      

      
    </div>
  );
};

export default MaritimeTransport;
