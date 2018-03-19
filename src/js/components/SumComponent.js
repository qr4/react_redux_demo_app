// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State } from '../state/Reducer';
import { Jokes } from '../business/Jokes';

export class DisconnectedSumComponent extends Component<{ jokes: Jokes }> {
    render() {
        const sum = this.props.jokes.listOfJokes.reduce((red: number, elem: string) => red + elem.length, 0);
        return <div className="well test-class-sum">{'Sum of all characters: ' + sum}</div>;
    }
}

const mapStateToProps = (state: State): { jokes: Jokes } => ({ jokes: state.jokes });

export const SumComponent = connect(mapStateToProps)(DisconnectedSumComponent);
