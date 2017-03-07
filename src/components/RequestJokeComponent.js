// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Panel, FormGroup,  Button, ControlLabel, FormControl } from 'react-bootstrap';
import { Actions } from '../state/Actions';

export class DisconnectedRequestJokeComponent extends React.Component {

    state: {
        input: string
    };

    constructor() {
        super();
        (this: any)._onInputChange = this._onInputChange.bind(this);
        (this: any)._onSubmit = this._onSubmit.bind(this);

        // setup initial state
        this.state = {
            input: ''
        }
    }

    _onInputChange(e: any) {
        this.setState({
            input: e.target.value
        });
    }

    _onSubmit() {
        const parsedInt = parseInt(this.state.input, 10);
        if (!isNaN(parsedInt)) {
            this.props.requestJoke(parsedInt);
            this.setState({
                input: ''
            });
        }
    }

    render() {
        return (
            <Panel>
                <FormGroup>
                    <ControlLabel>Request more Jokes!</ControlLabel>
                    <FormControl type="number"
                                 className="form-control-test"
                                 value={this.state.input}
                                 onChange={this._onInputChange}
                                 placeholder="Enter id"/>
                </FormGroup>

                <Button bsStyle="primary" onClick={this._onSubmit} className="test-submit-button">
                    Request joke with this id
                </Button>
            </Panel>
        );
    }
}

DisconnectedRequestJokeComponent.propTypes = {
    // injected through redux
    requestJoke: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        requestJoke: (num) => dispatch(Actions.requestJoke(num))
    };
};

export const RequestJokeComponent = connect(null, mapDispatchToProps)(DisconnectedRequestJokeComponent);
