// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { Jokes } from "../business/Jokes";

import { ActionTypes } from "./Actions";

function jokesReducer(previousState = new Jokes(), action: Object) {

    if (action.type === ActionTypes.ADD_NEW_JOKE) {
        return previousState.addNewJoke(action.data.joke);
    } else if (action.type === ActionTypes.DELETE_JOKE) {
        return previousState.removeJokeAtPosition(action.data);
    }

    return previousState;
}

const reducer = combineReducers({
    jokes: jokesReducer
});

export const store = createStore(reducer, composeWithDevTools(), applyMiddleware(thunk));

export type StoreType = {
    jokes: Jokes
};