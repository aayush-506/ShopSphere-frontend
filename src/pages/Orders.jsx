import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
   const { cartItems, currency } = useContext(ShopContext);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
     <div className='text-left pb-6 text-2xl uppercase'>
          <Title text1="my" text2="orders" />
        </div>

      {
        cartItems.slice(0, 4).map((item, index) => (
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center justify-between'>

            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image} alt="" />

              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>

                <div className='flex items-center gap-3 mt-2 text-base text-gray-600'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size || 'M'}</p>
                </div>

                <p className='mt-2'>
                  Date: <span className='text-gray-400'>25, May, 2024</span>
                </p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between mt-4 md:mt-0'>
              <div className='flex items-center gap-2 text-green-600'>
                <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                {index % 2 === 0 ? 'Ready to ship' : 'Shipped'}
              </div>
              <button className='border px-4 py-2 rounded text-sm hover:bg-gray-100'>
                Track Order
              </button>
            </div>

          </div>
        ))
      }
    </section>
  );
};

export default Orders;
