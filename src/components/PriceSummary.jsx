import React, { useContext } from 'react';
import { CartContext } from '../context/CartState';
import { formatPrice } from '../utils/helper';

const PriceSummary = () => {
  const { cart } = useContext(CartContext);

  const price = () => {
    return cart?.reduce(
      (initialVal, item) => initialVal + item?.product_price * item?.qty,
      0
    );
  };

  const discount = () => {
    return cart?.reduce(
      (initialVal, item) =>
        initialVal +
        item?.qty * item?.discounted_price -
        item?.qty * item?.product_price,
      0
    );
  };

  const total = () => {
    return cart?.reduce(
      (initialVal, item) => initialVal + item?.discounted_price * item?.qty,
      0
    );
  };

  return (
    <div className='bg-white shadow-md'>
      <h1 className='text-xl p-3'>PRICE DETAILS</h1>
      <hr />
      <div className='p-3'>
        <div className='flex my-3 items-center justify-between'>
          <p className='text-md'>Price ({cart?.length} items)</p>
          <p>{formatPrice(price())}</p>
        </div>
        <div className='flex my-3 items-center justify-between'>
          <p className='text-md'>Discount</p>
          <p className='text-green-600'>{formatPrice(discount())}</p>
        </div>
        <div className='flex my-3 items-center justify-between'>
          <p className='text-md'>Delivery Charges</p>
          <p className='text-green-600'>FREE</p>
        </div>
        <hr />
        <div className='flex p-2 my-3 items-center justify-between'>
          <p className='text-xl font-semibold'>Total Amount</p>
          <p className='font-semibold'>{formatPrice(total())}</p>
        </div>
        <hr />
        <p className='my-2 font-semibold text-green-600'>
          You will save <span>{formatPrice(discount())}</span> on this order
        </p>
      </div>
    </div>
  );
};

export default PriceSummary;
