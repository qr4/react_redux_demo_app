// @flow
import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

import type { StoreType } from '../state/StoreProvider';
import { Jokes } from "../business/Jokes";
import { Actions } from "../state/Actions";

export class DisconnectedListComponent extends React.Component {

    constructor() {
        super();
        (this: any)._deleteButtonHandler = this._deleteButtonHandler.bind(this);
    }

    _deleteButtonHandler(index: number) {
        this.props.deleteJoke(index);
    }

    render() {
        return (
            <ListGroup fill>
                {
                    this.props.jokes.getJokes().map((value, index) => {
                        return (
                            <ListGroupItem key={'joke-' + index} className={'clearfix list-group-item-test-' + index}>
                                {value}
                                <Button bsSize="sm" className="pull-right" onClick={() => this._deleteButtonHandler(index)}>
                                    Delete this joke!
                                </Button>
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
        deleteJoke: (index) => dispatch(Actions.deleteJoke(index))
    };
};

export const ListComponent = connect(mapStateToProps, mapDispatchToProps)(DisconnectedListComponent);

