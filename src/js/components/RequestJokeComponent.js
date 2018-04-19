// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../state/Actions';
import type { Dispatch } from 'redux';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

type State = { input: string };
type Props = { requestJoke: number => void };

export class DisconnectedRequestJokeComponent extends Component<Props, State> {
    state: State = { input: '' };

    _onInputChange = (e: SyntheticInputEvent<*>) => {
        this.setState({
            input: e.target.value,
        });
    };

    _onSubmit = (e: SyntheticEvent<*>) => {
        e.preventDefault();
        const parsedInt = parseInt(this.state.input, 10);
        if (!isNaN(parsedInt)) {
            this.props.requestJoke(parsedInt);
            this.setState({ input: '' });
        }
    };

    render() {
        return (
            <Form onSubmit={this._onSubmit}>
                <FormGroup>
                    <ControlLabel>Request more Jokes!</ControlLabel>
                    <FormControl
                        type="number"
                        className="form-control-test"
                        value={this.state.input}
                        onChange={this._onInputChange}
                        placeholder="Enter id..."
                    />
                </FormGroup>

                <Button bsStyle="primary" type="submit">
                    Request joke with this id
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ requestJoke: num => dispatch(Actions.requestJoke(num)) });

export const RequestJokeComponent = connect(null, mapDispatchToProps)(DisconnectedRequestJokeComponent);
