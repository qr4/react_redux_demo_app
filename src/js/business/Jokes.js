// @flow

export class Jokes {
    +listOfJokes: string[];

    constructor(initialListOfJokes: string[] = []) {
        this.listOfJokes = initialListOfJokes;
    }

    addNewJoke(joke: string): Jokes {
        return new Jokes([...this.listOfJokes, joke]);
    }

    removeJokeAtPosition(position: number): Jokes {
        if (position < 0 || this.listOfJokes.length <= position) {
            return this;
        }
        return new Jokes([...this.listOfJokes.slice(0, position), ...this.listOfJokes.slice(position + 1)]);
    }
}
