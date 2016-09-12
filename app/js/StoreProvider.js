import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {ActionTypes} from './Actions.js';
import {List} from 'immutable';

const listReducer = (previousState = new List(), action) => {
  if (action.type === ActionTypes.addListItem) {
    return previousState.push(action.data);
  } else if (action.type === ActionTypes.deleteListItem) {
    return previousState.remove(action.data);
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

