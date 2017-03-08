// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';

import type { StoreType } from '../state/StoreProvider';
import { Jokes } from "../business/Jokes";

export class DisconnectedSumComponent extends React.Component {
    render() {
        const sum = this.props.jokes.getJokes().reduce((red, elem) => red + elem.length, 0);
        return (
            <Well className="test-class-sum">
                {'Sum of all characters: ' + sum }
            </Well>
        );
    }
}

DisconnectedSumComponent.propTypes = {
    // injected through redux
    jokes: React.PropTypes.instanceOf(Jokes).isRequired
};

export const SumComponent = connect(
    (state: StoreType) => {
        return {
            jokes: state.jokes
        };
    }
)(DisconnectedSumComponent);
