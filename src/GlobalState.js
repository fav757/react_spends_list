import React, { createContext, useReducer } from 'react';
import RootReducer from './RootReducer';

const initialState = {
  activeType: 'spends',
  spends: {
    products: [
      { amount: 25, comment: 'milk' },
      { amount: 15, comment: 'bread' },
      { amount: 33, comment: 'chips' },
    ],
    home: [
      { amount: 22, comment: 'tools' },
      { amount: 11, comment: 'water' },
      { amount: 21, comment: 'gaz' },
    ],
    tech: [
      { amount: 20000, comment: 'notebook' },
    ],
  },
  incomes: {
    job: [
      { amount: 30000, comment: 'salary' },
      { amount: 15000, comment: 'bonus' },
    ],
    freelance: [
      { amount: 10000, comment: 'website creation' },
    ]
  },
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
