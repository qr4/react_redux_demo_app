// @flow

export class Jokes {
    +listOfJokes: string[];

    constructor(initialListOfJokes: string[] = []) {
        this.listOfJokes = initialListOfJokes;
    }

    addNewJoke(joke: string): Jokes {
        return new Jokes([...this.listOfJokes, joke]);
    }
}
