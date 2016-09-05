import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {List} from 'immutable';

const listReducer = (previousState = new List(), action) => {
  if (action.type === 'ADD_LIST') {
    return previousState.push(action.data);
  } else {
    return previousState;
  }
};

export const store = createStore(
  combineReducers({
    list: listReducer
  }),
   window.devToolsExtension ? window.devToolsExtension() : f => f
);

