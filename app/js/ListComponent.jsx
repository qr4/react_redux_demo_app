import React from 'react'
import {List} from 'immutable';
import {connect} from 'react-redux';

import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

import {Actions} from './Actions.js';

const DisconnectedListComponent = React.createClass({
  propTypes: {
    list: React.PropTypes.instanceOf(List).isRequired
  },

  _onDelete(index) {
    this.props.dispatch(Actions.deleteListItem(index));
  },

  render() {
    return (
      <ListGroup fill>
        {
          this.props.list.map((value, index) => {
            return (
              <ListGroupItem key={index}>
                {value}
                <Button onClick={() => this._onDelete(index)}
                        style={{marginLeft: '70%'}}>
                  Delete Item
                </Button>
              </ListGroupItem>);
          }).toArray()
        }
      </ListGroup>
    );
  }
});

export const ListComponent = connect(function(state) {
    return {
        list: state.list
    };
})(DisconnectedListComponent);
