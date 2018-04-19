// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import type { Dispatch } from 'redux';

import type { State } from '../state/Reducer';
import { Jokes } from '../business/Jokes';

type Props = {
    jokes: Jokes,
};

export class DisconnectedListComponent extends Component<Props> {
    render() {
        return (
            <ListGroup>
                {this.props.jokes.listOfJokes.map((value, index) => (
                    <ListGroupItem key={'joke-' + index} className={'clearfix list-group-item-test-' + index}>
                        {value}
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state: State): Props => ({ jokes: state.jokes });

export const ListComponent = connect(mapStateToProps)(DisconnectedListComponent);
