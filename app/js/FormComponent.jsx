import React from 'react';
import {connect} from 'react-redux';
import {Panel, Button, Input, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

import {Actions} from './Actions.js';

const DisconnectedFormComponent = React.createClass({

  getInitialState() {
    return {value: 0};
  },

    onSubmit() {
      this.props.dispatch(Actions.addListItem(this.state.value));
      this.setState({value: 0});
    },

  onInputChange(e) {
    const parsedInt = parseInt(e.target.value, 10);
    if (!isNaN(parsedInt)) {
      this.setState({
        value: parseInt(e.target.value, 10)
      });
    }
  },

    render() {
      return (
        <Panel>
          <FormGroup>
            <ControlLabel>Create new item</ControlLabel>
            <FormControl
              type="number"
              value={this.state.value}
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
