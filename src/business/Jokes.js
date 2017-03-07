// @flow
import { List } from 'immutable';

export class Jokes {
    _listOfJokes: List<string>;

    constructor(initialListOfJokes: List<string> = new List()) {
        this._listOfJokes = initialListOfJokes;
    }

    addNewJoke(joke: string): Jokes {
        return new Jokes(this._listOfJokes.push(joke));
    }

    removeJokeAtPosition(index: number): Jokes {
        return new Jokes(this._listOfJokes.delete(index));
    }

    getJokes(): List<string> {
        return this._listOfJokes;
    }
}
