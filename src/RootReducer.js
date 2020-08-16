import { ADD_TO_SPENDS } from './RootActions';
import { act } from 'react-dom/test-utils';

function AppReducer(state, action) {
  switch (action.type) {
    case ADD_TO_SPENDS: {
      const newState = Object.assign({}, state);
      newState.spends[action.payload.category].push(action.payload.value);
      return newState;
    }
    default:
      return state;
  }
}

export default AppReducer;
