// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import type { State } from '../state/Reducer';
import { Jokes } from '../business/Jokes';
import { Actions } from '../state/Actions';

export class DisconnectedListComponent extends Component<{ jokes: Jokes, deleteJoke: number => void }> {
    _deleteButtonHandler = (index: number) => {
        this.props.deleteJoke(index);
    };

    render() {
        return (
            <ul>
                {this.props.jokes.listOfJokes.map((value, index) => (
                    <li key={'joke-' + index} className={'clearfix list-group-item-test-' + index}>
                        {value}
                        <button
                            className="ml-2 mt-1 btn btn-secondary pull-right"
                            onClick={() => this._deleteButtonHandler(index)}>
                            Delete this joke!
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state: State) => ({ jokes: state.jokes });

const mapDispatchToProps = (dispatch: Dispatch) => ({ deleteJoke: index => dispatch(Actions.deleteJoke(index)) });

export const ListComponent = connect(mapStateToProps, mapDispatchToProps)(DisconnectedListComponent);
