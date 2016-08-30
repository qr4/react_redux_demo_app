import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {List} from 'immutable';

const listReducer = (previousState: any = new List(), action: any) => {
  if (action.type === 'ADD_LIST') {
    return previousState.push(action.data);
  } else {
    return previousState;
  }
};

const sumReducer = (previousState: any = 0, action: any) => {
  if (action.type === 'ADD_LIST') {
    return previousState + action.data;
  } else {
    return previousState;
  }

};

export const store = createStore(
  combineReducers({
    list: listReducer,
    sum: sumReducer
  }),
   window.devToolsExtension ? window.devToolsExtension() : f => f
);

