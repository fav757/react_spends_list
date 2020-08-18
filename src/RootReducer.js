import { ADD_TO_SPENDS, ADD_TO_INCOMES, CHANGE_TYPE, CHANGE_DATA_SECTOR } from './RootActions';

function AppReducer(state, action) {
  switch (action.type) {
    case CHANGE_TYPE: {
      return {...state, activeType: action.payload};
    }
    case CHANGE_DATA_SECTOR: {
      return {...state, dataSector: action.payload};
    }
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
    case ADD_TO_INCOMES: {
      const newState = Object.assign({}, state);
      if (newState.incomes[action.payload.category] === undefined) {
        newState.incomes[action.payload.category] = [];
      }
      newState.incomes[action.payload.category].push({
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
