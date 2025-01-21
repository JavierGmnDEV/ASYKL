import  { useState } from 'react';
import { Download, Check, Clear, ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

const ListaCheck = () => {
  const [solicitudes, setSolicitudes] = useState([
    {
      id: 1,
      product: 'AZUCAR TIPO A',
      price: 53.06,
      quantity: '29.5 TN',
      containers: 1,
      total: 29508.00,
      shipping: 2500.00,
      finalTotal: 29408.00,
      approved: null,
      showDetails: false,
    },
    // Puedes agregar más solicitudes aquí
  ]);

  const handleApprove = (id) => {
    setSolicitudes(solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, approved: true } : solicitud
    ));
  };

  const handleDeny = (id) => {
    setSolicitudes(solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, approved: false } : solicitud
    ));
  };

  const toggleDetails = (id) => {
    setSolicitudes(solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, showDetails: !solicitud.showDetails } : solicitud
    ));
  };

  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      {/* Contenedor principal */}
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">ASCYKL SERVICE & REPRESENTATION INTERNATIONAL INC.</h1>
          <h2 className="text-lg font-semibold text-gray-700">OFERTA COMERCIAL</h2>
          <p className="text-gray-600">5/1/2024</p>
        </div>
  
        {/* Datos del cliente */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="font-semibold w-32 inline-block">Cliente:</span>
            <div className="inline-block border-b border-gray-300 w-64"></div>
          </div>
          <div className="mb-2">
            <span className="font-semibold w-32 inline-block">Email:</span>
            <div className="inline-block border-b border-gray-300 w-64"></div>
          </div>
          <div className="mb-2">
            <span className="font-semibold w-32 inline-block">Teléfono:</span>
            <div className="inline-block border-b border-gray-300 w-64"></div>
          </div>
          <div>
            <span className="font-semibold w-32 inline-block">Dirección:</span>
            <p className="inline-block">Terminal Mariel, Cuba</p>
          </div>
        </div>
  
        <p className="mb-4 text-sm font-semibold text-gray-700">Todos los precios están en dólares USD</p>
  
        {/* Lista de solicitudes */}
        <div>
          {solicitudes.map((item, index) => (
            <div key={index} className="mb-8 border  rounded-lg">
              {/* Encabezado de la solicitud */}
              <div className="p-4 bg-blue-50 whitespace-nowrap">
                <div className="inline-block align-top">
                  <h3 className="font-semibold">{item.product}</h3>
                  <p className="text-sm">Cantidad: {item.quantity}</p>
                </div>
                <div className=" flex items-center justify-end top- ml-14 ">
                  <button
                    className="bg-yellow-500 text-white px-1 py-1 rounded mr-2"
                    onClick={() => handleApprove(item.id)}
                  >
                    <Download />
                  </button>
                  <button
                    className="bg-green-500 text-white px-1 py-1 rounded mr-2"
                    onClick={() => handleApprove(item.id)}
                  >
                    <Check />
                  </button>
                  <button
                    className="bg-red-500 text-white px-1 py-1 rounded mr-2"
                    onClick={() => handleDeny(item.id)}
                  >
                    <Clear />
                  </button>
                  <button
                    className="bg-blue-100 text-blue-800 px-1 py-1 rounded"
                    onClick={() => toggleDetails(item.id)}
                  >
                    {item.showDetails ? <ArrowDropDown /> : <ArrowDropUp />}
                  </button>
                </div>
              </div>
  
              {/* Detalles de la solicitud */}
              {item.showDetails && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="p-2 border">Producto</th>
                        <th className="p-2 border">Descripción</th>
                        <th className="p-2 border">Embalaje</th>
                        <th className="p-2 border">Precio por saco</th>
                        <th className="p-2 border">TM/Contenedor</th>
                        <th className="p-2 border">Contenedores</th>
                        <th className="p-2 border">Ex/Work (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border text-center">1</td>
                        <td className="p-2 border">{item.product}</td>
                        <td className="p-2 border">630 sacos de 50 kg</td>
                        <td className="p-2 border text-right">${item.price.toFixed(2)}</td>
                        <td className="p-2 border text-center">{item.quantity}</td>
                        <td className="p-2 border text-center">{item.containers}</td>
                        <td className="p-2 border text-right">${item.total.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="border"></td>
                        <td className="p-2 border">Transporte</td>
                        <td className="p-2 border text-right">$400.00</td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="border"></td>
                        <td className="p-2 border">FOB</td>
                        <td className="p-2 border text-right">${item.total.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td colSpan={5} className="border"></td>
                        <td className="p-2 border">Flete marítimo</td>
                        <td className="p-2 border text-right">${item.shipping.toFixed(2)}</td>
                      </tr>
                      <tr className="font-semibold bg-blue-50">
                        <td colSpan={5} className="border"></td>
                        <td className="p-2 border">Total CIF Mariel, Cuba</td>
                        <td className="p-2 border text-right">${item.finalTotal.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaCheck;