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
        const jokes = new Jokes().addNewJoke('testJoke');

        const newJokes = jokes.removeJokeAtPosition(0);

        expect(jokes.getJokes().size).toBe(1);
        expect(jokes.getJokes().get(0)).toEqual('testJoke');

        expect(newJokes.getJokes().size).toBe(0);
    });

    it('behaves sanely if index for deletion is out of range', () => {
        const jokes = new Jokes().addNewJoke('testJoke');

        const newJokes = jokes.removeJokeAtPosition(99);

        expect(jokes.getJokes().size).toBe(1);
        expect(jokes.getJokes().get(0)).toEqual('testJoke');

        expect(newJokes.getJokes().size).toBe(1);
        expect(newJokes.getJokes().get(0)).toEqual('testJoke');
    });
});
