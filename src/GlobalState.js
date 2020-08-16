import React, { createContext, useReducer } from 'react';
import RootReducer from './RootReducer';

const initialState = {
  spends: {},
  incomes: {}
};

export const GlobalState = createContext(initialState);

export const GlobalContext = ({children}) => {
  const [state, dispatch] = useReducer(RootReducer, GlobalState);

  return (
  <GlobalState.Provider value={{state, dispatch}}>
    {children}
  </GlobalState.Provider>
  );
};
