
const Info2 = () => {
  return (
    <div className="bg-white p-4 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Sección principal */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Transporte Marítimo</h1>
          <p className="text-gray-600 mb-4">
            El transporte marítimo es el método de transportar productos en
            contenedores cargados en barcos por mar. Más del 90 % del comercio
            mundial se realiza por mar. Si quiere enviar sus mercancías por
            todo el mundo, el transporte marítimo es la opción más cómoda.
          </p>
          <p className="text-gray-600 mb-6">
            Como regla general, los envíos que pesen más de 100 kg, o estén
            compuestos por varias cajas, se enviarán por transporte marítimo.
            Los contenedores están diseñados y construidos para el transporte
            intermodal de mercancías. Esto significa que los contenedores se
            pueden utilizar en varios modos de transporte, desde el barco hasta
            el ferrocarril y el camión, sin necesidad de descargar y volver a
            cargar la mercancía.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition mb-4">
            Ver nuestros servicios
          </button>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/foto-gratis/vista-aerea-buque-carga-contenedores-mar_335224-720.jpg?t=st=1737426824~exp=1737430424~hmac=4f2e9fb9ecb87ed93e923cada9410f9052c8f415de786caa04ce50a382e779d2&w=900"
            alt="Transporte marítimo"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sección secundaria */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-10">
        {/* Imagen */}
        <div className="md:w-1/2">
        <img
            src="https://img.freepik.com/foto-gratis/medios-transporte-logisticos-junto-hologramas-tecnologicos-futuristas_23-2151662967.jpg?t=st=1737426900~exp=1737430500~hmac=43d2c213dc3e04f259afe16a46fd8af158f836b61a0f25f06e74fc2e3440229a&w=900"
            alt="La red del futuro"
            className="rounded-lg shadow-lg "
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-3xl font-bold mb-4">Transporte Marítimo</h1>
          <p className="text-gray-600 mb-4">
          Obtén más información sobre la red del futuro, una red innovadora impulsada por circuitos más ágiles con menos escalas por servicio, una amplia red de lanzaderas y nodos líderes en el sector.
          </p>
          <p className="text-gray-600 mb-6">
          Los beneficios del transporte marítimo incluyen:

Método de transporte económico en comparación con otros modos (p. ej., transporte aéreo)
Más barato que otros modos de transporte (p. ej., transporte aéreo) en largas distancias
La solución más eficiente en carbono
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info2;