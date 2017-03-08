// @flow
import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import type { StoreType } from '../state/StoreProvider';
import { Jokes } from "../business/Jokes";

export class DisconnectedListComponent extends React.Component {

    render() {
        return (
            <ListGroup fill>
                {
                    this.props.jokes.getJokes().map((value, index) => {
                        return (
                            <ListGroupItem key={'joke-' + index} className={'clearfix list-group-item-test-' + index}>
                                {value}
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
    jokes: React.PropTypes.instanceOf(Jokes).isRequired
};

const mapStateToProps = (state: StoreType) => {
    return {
        jokes: state.jokes
    };
};

export const ListComponent = connect(mapStateToProps)(DisconnectedListComponent);

