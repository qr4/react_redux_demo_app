// @flow

import type { Dispatch } from 'redux';

export type Action =
    | { type: 'ADD_NEW_JOKE', data: { id: number, joke: string } }
    | { type: 'DELETE_JOKE', payload: number };

const addJoke = (id: number, joke: string): Action => {
    return {
        type: 'ADD_NEW_JOKE',
        data: {
            id,
            joke,
        },
    };
};

const deleteJoke = (position: number): Action => {
    return {
        type: 'DELETE_JOKE',
        payload: position,
    };
};

const requestJoke = (jokeId: number) => {
    return async (dispatch: Dispatch /*, getState: GetState */) => {
        try {
            const response: Response = await fetch('http://api.icndb.com/jokes/' + jokeId, { method: 'GET' });
            const json: Object = await response.json();
            json.value.joke && dispatch(addJoke(json.value.id, json.value.joke));
        } catch (e) {
            console.error('Requesting joke failed: ' + e);
        }
    };
};

export const Actions = {
    addJoke,
    deleteJoke,

    // async actions
    requestJoke,
};
