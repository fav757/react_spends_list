import { ADD_TO_SPENDS } from './RootActions';

function AppReducer(state, action) {
  switch (action.type) {
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
