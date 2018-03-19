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

    it('removes jokes correctly', () => {
        const jokes = new Jokes().addNewJoke('my awesome joke').addNewJoke('this is a pretty lame joke');

        const newJokes = jokes.removeJokeAtPosition(1);

        expect(jokes.listOfJokes.length).toBe(2);

        expect(newJokes.listOfJokes.length).toBe(1);
        expect(newJokes.listOfJokes[0]).toBe('my awesome joke');
    });

    it('removes jokes correctly for invalid indices', () => {
        const jokes = new Jokes().addNewJoke('my awesome joke').addNewJoke('this is a pretty lame joke');

        const newJokes = jokes.removeJokeAtPosition(99999);

        expect(jokes.listOfJokes.length).toBe(2);
        expect(newJokes.listOfJokes.length).toBe(2);
    });

    it('removes jokes correctly for invalid  negative indices', () => {
        const jokes = new Jokes().addNewJoke('my awesome joke').addNewJoke('this is a pretty lame joke');

        const newJokes = jokes.removeJokeAtPosition(-1);

        expect(jokes.listOfJokes.length).toBe(2);
        expect(newJokes.listOfJokes.length).toBe(2);
    });
});
