export const initialState = {
  cart: [],
  itemsFavorit: [],
  favoritData: [],
  total: [],
};

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
  SET_FAVORIT: "SET_FAVORIT",
};

const reducer = (state, action) => {
  // console.log(action);
  // console.log(state);

  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };
    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case actionType.SET_FAVORIT:
      return {
        ...state,
        itemsFavorit: action.itemsFavorit,
      };

    default:
      return state;
  }
};

export default reducer;
