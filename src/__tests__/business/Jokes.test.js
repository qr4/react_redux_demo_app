import { Jokes } from "../../business/Jokes";

describe('Jokes', () => {
    it('adds new jokes correctly', () => {
        const jokes = new Jokes();

        const newJokes = jokes.addNewJoke('testJoke');

        expect(jokes.getJokes().size).toBe(0);

        expect(newJokes.getJokes().size).toBe(1);
        expect(newJokes.getJokes().get(0)).toEqual('testJoke');
    });

});
