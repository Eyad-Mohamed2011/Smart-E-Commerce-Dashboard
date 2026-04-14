import React, { createContext, useReducer, useEffect } from 'react';

export const ProductContext = createContext();

const initialState = {
  products: [],
  loading: true,
  error: null
};

const productReducer = (state, action) => {
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
        loading: false 
      };

    case "ADD_PRODUCT":
      return { 
        ...state, 
        products: [action.payload, ...state.products] 
      };

    case "DELETE_PRODUCT":
      return { 
        ...state, 
        products: state.products.filter(p => p.id !== action.payload) 
      };

    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map(p => 
          p.id === action.payload.id ? action.payload : p
        )
      };

    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchInitialData = () => {
      // 1. Start Loading
      dispatch({ type: "SET_LOADING", payload: true });
      
      setTimeout(() => {
        const dummyData = [
          { id: 1, name: "MacBook Pro M3", price: 2499, inStock: true },
          { id: 2, name: "iPad Pro", price: 1099, inStock: true },
          { id: 3, name: "Magic Keyboard", price: 299, inStock: false }
        ];
        
        // 2. Load Data (This sets loading to false automatically in the reducer)
        dispatch({ type: "LOAD_PRODUCTS", payload: dummyData });
      }, 1500);
    };

    fetchInitialData();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};