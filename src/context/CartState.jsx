import React, { createContext, useEffect, useReducer } from 'react';
import { initialState, reducer } from './CartReducer';

export const CartContext = createContext();

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state?.cart));
    localStorage.setItem('saved', JSON.stringify(state?.saved));
  }, [state.cart, state.cart]);

  const addToCart = (productData) => {
    dispatch({ type: 'ADD_TO_CART', payload: productData });
  };

  const removeFromCart = (productID) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productID });
  };

  const increaseItem = (productID) => {
    dispatch({ type: 'INCREASE_ITEM', payload: productID });
  };

  const decreaseItem = (productID) => {
    dispatch({ type: 'DECREASE_ITEM', payload: productID });
  };

  const addToSave = (productData) => {
    dispatch({ type: 'ADD_T0_SAVE', payload: productData });
  };

  const removeFromSaved = (productID) => {
    dispatch({ type: 'REMOVE_FROM_SAVE', payload: productID });
  };
  const moveFromSavedToCart = (productData) => {
    dispatch({ type: 'MOVE_SAVE_TO_CART', payload: productData });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
        addToSave,
        moveFromSavedToCart,
        removeFromSaved,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
