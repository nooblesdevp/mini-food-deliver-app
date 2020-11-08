export const initialState = {
  basket: [],
};

// fucnting total price
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, food) => food.price + amount, 0);

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.type],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      //clone first item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketFood) => basketFood.id === action.id
      );
      if (index >= 0) {
        //food existes in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(`coant remove product (id: ${action.id} as not found)`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
