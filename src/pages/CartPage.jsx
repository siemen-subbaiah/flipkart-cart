import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import PriceSummary from '../components/PriceSummary';
import SaveItem from '../components/SaveItem';
import { CartContext } from '../context/CartState';

const CartPage = () => {
  const { cart, saved } = useContext(CartContext);

  return (
    <>
      {cart?.length === 0 && saved?.length === 0 ? (
        <h1 className='text-xl font-semibold text-center mt-20'>
          No items to display
        </h1>
      ) : (
        <div className='container mx-auto px-16 grid md:grid-cols-12 grid-cols-1 justify-center gap-5 p-10'>
          <section className='col-span-8 my-items'>
            {cart?.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            {saved?.length >= 1 && (
              <div className='my-10'>
                <h1 className='text-xl my-2'>
                  Saved For Later ({saved?.length})
                </h1>
                {saved?.map((item) => (
                  <SaveItem item={item} key={item.id} />
                ))}
              </div>
            )}
          </section>
          {cart.length >= 1 && (
            <div className='col-span-4 fixed right-10 w-[30%] top-20'>
              <PriceSummary />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartPage;
