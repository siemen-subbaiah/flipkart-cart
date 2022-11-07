import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartState';
import { formatPrice } from '../utils/helper';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className='p-3'>
      <img src={product.product_image} alt={product.name} className='h-96' />
      <h1 className='text-md text-gray-500 mt-2'>{product.brand}</h1>
      <p className='text-sm'>{product.product_name}</p>
      <div className='flex items-center gap-2'>
        <p className='my-2 font-semibold'>
          {formatPrice(product.discounted_price)}
        </p>
        <p className='my-2 text-gray-500 line-through'>
          {formatPrice(product.product_price)}
        </p>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <p className='text-gray-500'>Size: </p>
          {product.size.map((item, i) => {
            return (
              <div key={i}>
                {i === 0 ? (
                  <p className='text-sm'> {item}</p>
                ) : (
                  <p className='text-sm'>, {item}</p>
                )}
              </div>
            );
          })}
        </div>
        <Link to='/cart'>
          <button
            onClick={() =>
              addToCart({
                id: product.product_id,
                image: product.product_image,
                name: product.product_name,
                brand: product.brand,
                product_price: product.product_price,
                discounted_price: product.discounted_price,
                qty: 1,
              })
            }
            className='bg-[#ff9f00] text-white px-2 py-[0.1rem] rounded-sm'
          >
            Add to cart
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Product;
