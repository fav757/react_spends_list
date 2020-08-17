import { ADD_TO_SPENDS } from './RootActions';

function AppReducer(state, action) {
  switch (action.type) {
    case ADD_TO_SPENDS: {
      const newState = Object.assign({}, state);
      if (newState.spends[action.payload.category] === undefined) {
        newState.spends[action.payload.category] = [];
      }
      newState.spends[action.payload.category].push({
        amount: action.payload.amount,
        comment: action.payload.comment,
      });
      return newState;
    }
    default:
      return state;
  }
}

export default AppReducer;
