// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import type { StoreType } from '../state/StoreProvider';
import { Jokes } from "../business/Jokes";
import { Actions } from "../state/Actions";

export class DisconnectedListComponent extends Component {

    constructor() {
        super();
    }

    _deleteJoke(position: number) {
        this.props.deleteJoke(position);
    }

    render() {
        return (
            <ListGroup fill>
                {
                    this.props.jokes.getJokes().map((value, index) => {
                        return (
                            <ListGroupItem key={'joke-' + index} className={'clearfix list-group-item-test-' + index}>
                                {value}
                                <Button bsSize="sm" className="pull-right" onClick={() => this._deleteJoke(index)}>Delete Joke!</Button>
                            </ListGroupItem>
                        )
                    }).toArray()
                }
            </ListGroup>
        );
    }
}

DisconnectedListComponent.propTypes = {
    // injected through redux
    jokes: React.PropTypes.instanceOf(Jokes).isRequired,

    deleteJoke: React.PropTypes.func.isRequired
};

const mapStateToProps = (state: StoreType) => {
    return {
        jokes: state.jokes
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteJoke: (position) => dispatch(Actions.deleteJoke(position))

    };
};

export const ListComponent = connect(mapStateToProps, mapDispatchToProps)(DisconnectedListComponent);

