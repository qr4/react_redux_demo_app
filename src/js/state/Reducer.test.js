// @flow

import { jokesReducer } from './Reducer';
import { Actions } from './Actions';
import { Jokes } from '../business/Jokes';

describe('jokesReducer', () => {
    it('does nothing on unknown action', () => {
        const action: any = {
            type: 'DEFINETELY UNKNOWN',
        };
        const initialState: any = { test: 'value' };
        const newState = jokesReducer(initialState, action);

        expect(newState).toBe(initialState);
    });

    it('adds joke on action', () => {
        const newState = jokesReducer(new Jokes(), Actions.addJoke(123, 'jooooooke'));

        expect(newState.listOfJokes.length).toBe(1);
        expect(newState.listOfJokes[0]).toBe('jooooooke');
    });

    it('removes jokes on action', () => {
        const newState = jokesReducer(new Jokes().addNewJoke('foo'), Actions.deleteJoke(0));

        expect(newState.listOfJokes.length).toBe(0);
    });
});
