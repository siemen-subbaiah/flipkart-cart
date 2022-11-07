export const initialState = {
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  saved: localStorage.getItem('saved')
    ? JSON.parse(localStorage.getItem('saved'))
    : [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existItem = state.cart.find((x) => x.id === action.payload.id);
      return {
        ...state,
        cart: existItem
          ? state.cart.map((item) => {
              if (item.id === existItem.id) {
                return { ...item, qty: item.qty + 1 };
              }
              return item;
            })
          : [...state.cart, action.payload],
      };
    }
    case 'INCREASE_ITEM': {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        }),
      };
    }
    case 'DECREASE_ITEM': {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, qty: item.qty === 0 ? 0 : item.qty - 1 };
          }
          return item;
        }),
      };
    }
    case 'ADD_T0_SAVE': {
      return {
        ...state,
        saved: [...state.saved, action.payload],
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case 'MOVE_SAVE_TO_CART': {
      return {
        ...state,
        cart: [action.payload, ...state.cart],
        saved: state.saved.filter((item) => item.id !== action.payload.id),
      };
    }
    case 'REMOVE_FROM_SAVE': {
      return {
        ...state,
        saved: state.saved.filter((item) => item.id !== action.payload),
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
