import React, { useContext } from 'react';
import { CartContext } from '../context/CartState';
import { formatPrice } from '../utils/helper';

const SaveItem = ({ item, saved }) => {
  const { removeFromSaved, moveFromSavedToCart } = useContext(CartContext);

  return (
    <>
      <section className='bg-white p-3 shadow-md'>
        <div className='flex gap-10'>
          <img src={item.image} alt={item.name} className='h-20' />
          <div>
            <p>
              {item.brand} {item.name}
            </p>
            <div className='flex items-center gap-2 my-1'>
              <p className='my-2 text-gray-500 line-through'>
                {formatPrice(item.qty * item.product_price)}
              </p>
              <p className='my-2 font-semibold'>
                {formatPrice(item.qty * item.discounted_price)}
              </p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 mt-5'>
          <div className='flex gap-3'>
            <button
              disabled
              onClick={() => decreaseItem(item.id)}
              className='border rounded-full px-2'
            >
              -
            </button>
            <button>{item.qty}</button>
            <button
              disabled
              onClick={() => increaseItem(item.id)}
              className='border rounded-full px-2'
            >
              +
            </button>
          </div>

          <button
            onClick={() =>
              moveFromSavedToCart({
                id: item.id,
                image: item.image,
                name: item.name,
                brand: item.brand,
                product_price: item.product_price,
                discounted_price: item.discounted_price,
                qty: item.qty,
              })
            }
            className='font-semibold'
          >
            MOVE TO CART
          </button>
          <button
            onClick={() => removeFromSaved(item.id)}
            className='font-semibold'
          >
            REMOVE
          </button>
        </div>
      </section>
      <hr />
    </>
  );
};

export default SaveItem;
