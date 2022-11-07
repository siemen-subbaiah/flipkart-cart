import React from 'react';
import Product from './Product';
import products from '../data/products.json';

const ProductList = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-xl my-3 font-semibold pl-8'>
        Clothing And Accessories
      </h1>
      <div className='grid md:grid-cols-4 grid-cols-1 place-items-center'>
        {products.map((product) => (
          <Product product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
