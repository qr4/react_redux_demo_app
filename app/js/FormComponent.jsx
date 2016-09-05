import React from 'react';
import {connect} from 'react-redux';
import {Panel, Button, Input, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import {Actions} from './Actions.js';

const DisconnectedFormComponent = React.createClass({

  getInitialState() {
    return {input: ''};
  },

  onSubmit() {
    const parsedInt = parseInt(this.state.input, 10);
    if (!isNaN(parsedInt)) {
      this.props.dispatch(Actions.addListItem(parsedInt));
      this.setState({input: ''});
    }
  },

  onInputChange(e) {
    this.setState({input: e.target.value});
  },

  render() {
    return (
      <Panel>
        <FormGroup>
          <ControlLabel>Create new item</ControlLabel>
          <FormControl
            type="number"
            value={this.state.input}
            onChange={this.onInputChange}
            placeholder={"Enter value"}
          />
        </FormGroup>
        <Button
          bsStyle="primary"
          onClick={this.onSubmit}>
          Add item
        </Button>
      </Panel>
    )
  }
});

export const FormComponent = connect()(DisconnectedFormComponent);
