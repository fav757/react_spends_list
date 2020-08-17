export const CHANGE_TYPE = 'CHANGE_TYPE';
export const changeType = (value) => ({
  type: CHANGE_TYPE,
  payload: value,
});

export const ADD_TO_SPENDS = 'ADD_TO_SPENDS';
export const addToSpends = (value) => ({
  type: ADD_TO_SPENDS,
  payload: value,
});

export const ADD_TO_INCOMES = 'ADD_TO_INCOMES';
export const addToIncomes = (value) => ({
  type: ADD_TO_INCOMES,
  payload: value,
});

