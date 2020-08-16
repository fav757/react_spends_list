export const ADD_TO_SPENDS = 'ADD_TO_SPENDS';
export const addToSpends = (value) => ({
  type: ADD_TO_SPENDS,
  payload: value,
});

export const CHANGE_INPUT_QUERY = 'CHANGE_INPUT_QUERY';
export const changeInputQuery = (value) => ({
  type: CHANGE_INPUT_QUERY,
  payload: value,
});
