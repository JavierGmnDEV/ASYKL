import PropTypes from 'prop-types';
import { Divider, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Media = ({ data }) => {
  const navigate = useNavigate();

  const handleRequestClick = (title) => {
    navigate(`/product/${title}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 mb-4">
      {data.map((item, index) => (
        <div key={index} className="w-72 h-auto flex flex-col justify-between border border-gray-300 rounded-lg overflow-hidden mx-auto my-2 mb-6">
          {item ? (
            <img
              className="w-full h-48 object-cover"
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width="100%" height={200} />
          )}
          {item ? (
            <div className="p-4 flex flex-col justify-between flex-grow mb-4 ">
              <div className='mb-4'> <h2 className="text-sm font-medium mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <Divider></Divider>
               
                <p className="text-sm text-blue-500 mb-2 mt-2">{`Quantity per Container: ${item.quantity_per_container}`}</p>
                <Divider className=' bg-slate-950  mt-5'></Divider>
                
                <p className="text-sm text-green-800">{`Price per Sack: ${item.price_per_sack}`}</p>
                <p className="text-sm text-green-800">{`Price per Kg: ${item.price_per_kg}`}</p>
                <p className="text-sm text-gray-600 mb-2">{`Container Quantity: ${item.container_quantity}`}</p>
                <Divider className=' bg-slate-950  mt-5 mb-2'></Divider>
                
              </div>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-sm text-orange-600">{`Discount: ${item.discount}`}</p>
                </div>
                <button
                  className="bg-blue-500 text-white text-sm py-1 px-2 rounded"
                  onClick={() => handleRequestClick(item.title)}
                >
                  Request
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 flex-grow">
              <Skeleton />
              <Skeleton width="60%" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Media.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Media;