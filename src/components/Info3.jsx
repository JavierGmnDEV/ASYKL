const SupplyChainServices = () => {
    return (
      <div className="bg-white p-4 mt-20">
        <h2 className="text-2xl font-bold mb-6">También puede estar interesado en</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 bg-white  rounded-md shadow-md">
            <img
              src="https://img.freepik.com/vector-gratis/asistente-linea-ayuda-al-usuario-preguntas-frecuentes-personaje-dibujos-animados-trabajador-centro-llamadas-mujer-que-trabaja-linea-directa_335657-2336.jpg?t=st=1737427088~exp=1737430688~hmac=6c666a5b17a2daa6d275c3e98d7866c872afcc52ecd9c2c865c1a18b919d0907&w=740"
              alt="Customs Services"
              className="w-full h-44 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2 p-3">Maersk Customs Services</h3>
            <p className="p-4">Nuestros equipos locales se especializan en tramitar la mercancía y conseguir un despacho de aduanas más rápido para tus productos perecederos.</p>
          </div>
          <div className="flex-1 bg-white  rounded-md shadow-md">
            <img
              src="https://img.freepik.com/vector-gratis/comercio-internacional-dibujado-mano_23-2149166407.jpg?t=st=1737427150~exp=1737430750~hmac=1a4e51ef68ac070740b40c6f6628523fa8914b382d621f49837263d4e9edd7cf&w=740"
              alt="Supply Chain Management"
              className="w-full h-44 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2 p-3">Gestión de la cadena de suministro</h3>
            <p className="p-4">Obtén soluciones a la medida para afrontar tus retos logísticos con nuestros servicios de gestión de la cadena de suministro. Y disfruta de una visibilidad integral de tu cadena de suministro.</p>
          </div>
          <div className="flex-1 bg-white rounded-md shadow-md">
            <img
              src="https://img.freepik.com/vector-gratis/composicion-isometrica-robots-industriales-inteligentes_1284-23828.jpg?t=st=1737427231~exp=1737430831~hmac=3c2e9af32db1ad3f37ac785c438ad3a390f7b77d813279fcb486c61dd834b4d6&w=900"
              alt="Storage and Distribution"
              className="w-full h-44 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2 p-3">Almacenamiento y distribución</h3>
            <p className="p-4">Nuestras ubicaciones estratégicas de almacenamiento, combinadas con las mejores herramientas de diseño, procesos y sistemas, garantizan soluciones de distribución eficientes.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SupplyChainServices;