// @flow

import { Jokes } from './Jokes';

describe('Jokes', () => {
    it('adds new jokes correctly', () => {
        const jokes = new Jokes();

        const newJokes = jokes.addNewJoke('testJoke');

        expect(jokes.listOfJokes.length).toBe(0);

        expect(newJokes.listOfJokes.length).toBe(1);
        expect(newJokes.listOfJokes[0]).toBe('testJoke');
    });
});
