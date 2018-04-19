// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { State } from '../state/Reducer';
import { Jokes } from '../business/Jokes';
import { Well } from 'react-bootstrap';

type Props = {
    jokes: Jokes,
};

export class DisconnectedSumComponent extends Component<Props> {
    render() {
        const sum = this.props.jokes.listOfJokes.reduce((red: number, elem: string) => red + elem.length, 0);
        return <Well className="test-class-sum"> {'Sum of all characters: ' + sum} </Well>;
    }
}

const mapStateToProps = (state: State): { jokes: Jokes } => ({ jokes: state.jokes });

export const SumComponent = connect(mapStateToProps)(DisconnectedSumComponent);
