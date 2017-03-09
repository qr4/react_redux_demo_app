// @flow

import { jokesReducer } from "../../state/StoreProvider";
import { Actions } from "../../state/Actions";
import { Jokes } from "../../business/Jokes";
import { _$_ } from 'meta-constant';

describe('jokesReducer', () => {
    it('does nothing on unknown action', () => {
        const action = {
            type: 'DEFINETELY UNKNOWN'
        };
        const initialState = _$_`initialState`;
        const newState = jokesReducer(initialState, action);

        expect(newState).toEqual(_$_`initialState`);
    });

    it('adds joke on action', () => {
        const newState = jokesReducer(new Jokes(), Actions.addJoke(123, 'jooooooke'));

        expect(newState.getJokes().size).toBe(1);
        expect(newState.getJokes().get(0)).toEqual('jooooooke');
    });

    it('removes jokes on action', () => {
        const newState = jokesReducer(new Jokes().addNewJoke(), Actions.deleteJoke(0));

        expect(newState.getJokes().size).toBe(0);
    });
});
