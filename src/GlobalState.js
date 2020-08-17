import React, { createContext, useReducer } from 'react';
import RootReducer from './RootReducer';

const initialState = {
  spends: {
    products: { amount: 25, comment: 'milks' },
  },
  incomes: {},
};

export const GlobalState = createContext(initialState);

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(RootReducer, initialState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};
