export const initialState = {
  products: [],
  loading: true,
  error: null
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };

    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [action.payload, ...state.products]
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload)
      };

    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};