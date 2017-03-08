// @flow

export const ActionTypes = {
    ADD_NEW_JOKE: 'ADD_NEW_JOKE',
    DELETE_JOKE: 'DELETE_JOKE'
};

const addNewJokeActionCreator = (id: number, joke: string) => {
    return {
        type: ActionTypes.ADD_NEW_JOKE,
        data: {
            id,
            joke
        }
    };
};

function requestJokeActionCreator(jokeId: number) {
    return (dispatch: any, getState: any) => {
        fetch('http://api.icndb.com/jokes/' + jokeId, { method: 'GET' }).then(
            (response: Response) => {
                response.json().then((json: any) => {
                    dispatch(addNewJokeActionCreator(
                        json.value.id,
                        json.value.joke
                    ));
                }, err => console.error('Could not parse json: ' + err));
            },
            err => console.error('Could not send get request: ' + err)
        )
    }
}

export const Actions = {
    addJoke: addNewJokeActionCreator,

    // async actions
    requestJoke: requestJokeActionCreator
};
