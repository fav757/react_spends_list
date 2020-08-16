import { ADD_TO_SPENDS, CHANGE_INPUT_QUERY } from './RootActions';

function AppReducer(state, action) {
  switch (action.type) {
    case CHANGE_INPUT_QUERY: {
      return {...state, inputQuery: action.payload};
    }
    case ADD_TO_SPENDS: {
      const newState = Object.assign({}, state);
      if (newState[action.payload.category] === undefined) {
        newState[action.payload.category] = [];
      }
      newState[action.payload.category].push(action.payload.value);
      return newState;
    }
    default:
      return state;
  }
}

export default AppReducer;
