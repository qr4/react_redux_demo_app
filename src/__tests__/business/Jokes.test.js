import { Jokes } from "../../business/Jokes";

describe('Jokes', () => {
    it('adds new jokes correctly', () => {
        const jokes = new Jokes();

        const newJokes = jokes.addNewJoke('testJoke');

        expect(jokes.getJokes().size).toBe(0);

        expect(newJokes.getJokes().size).toBe(1);
        expect(newJokes.getJokes().get(0)).toEqual('testJoke');
    });

    it('removes jokes correctly', () => {
        const jokes = new Jokes().addNewJoke('my awesome joke')
                                 .addNewJoke('this is a pretty lame joke');

        const newJokes = jokes.removeJokeAtPosition(1);

        expect(jokes.getJokes().size).toBe(2);

        expect(newJokes.getJokes().size).toBe(1);
        expect(newJokes.getJokes().get(0)).toEqual('my awesome joke');
    });

    it('removes jokes correctly for invalid indices', () => {
        const jokes = new Jokes().addNewJoke('my awesome joke')
                                 .addNewJoke('this is a pretty lame joke');

        const newJokes = jokes.removeJokeAtPosition(99999);

        expect(jokes.getJokes().size).toBe(2);
        expect(newJokes.getJokes().size).toBe(2);
    });

    it('removes jokes correctly for invalid  negative indices', () => {
        const jokes = new Jokes().addNewJoke('my awesome joke')
                                 .addNewJoke('this is a pretty lame joke');

        const newJokes = jokes.removeJokeAtPosition(-1);

        expect(jokes.getJokes().size).toBe(2);
        expect(newJokes.getJokes().size).toBe(2);
    });
});
