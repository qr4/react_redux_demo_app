// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../state/Actions';
import type { Dispatch } from 'redux';

type RequestJokeComponentState = { input: string };

export class DisconnectedRequestJokeComponent extends Component<
    { requestJoke: number => void },
    RequestJokeComponentState
> {
    state = { input: '' };

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
            <form onSubmit={this._onSubmit}>
                <div className="form-group">
                    <label className="control-label">Request more Jokes!</label>
                    <input
                        type="number"
                        className="form-control"
                        value={this.state.input}
                        onChange={this._onInputChange}
                        placeholder="Enter id..."
                    />
                </div>

                <button className="btn btn-primary">Request joke with this id</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ requestJoke: num => dispatch(Actions.requestJoke(num)) });

export const RequestJokeComponent = connect(null, mapDispatchToProps)(DisconnectedRequestJokeComponent);
