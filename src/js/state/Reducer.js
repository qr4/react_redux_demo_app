// @flow

import { Jokes } from '../business/Jokes';
import type { Action } from './Actions';
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';

export function jokesReducer(previousState: Jokes = new Jokes(), action: Action): Jokes {
    switch (action.type) {
        case 'ADD_NEW_JOKE':
            return previousState.addNewJoke(action.data.joke);
        default:
            return previousState;
    }
}

export type State = {
    jokes: Jokes,
};

export const rootReducer: Reducer<State> = combineReducers({
    jokes: jokesReducer,
});
