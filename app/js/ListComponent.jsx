import React from 'react'
import {List} from 'immutable';
import {connect} from 'react-redux';

import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';

const DisconnectedListComponent = React.createClass({
  propTypes: {
    list: React.PropTypes.instanceOf(List).isRequired
  },

  render() {
    return (
      <ListGroup fill>
        {this.props.list.map((value, index) =>
            <ListGroupItem key={index}>
              {value}
            </ListGroupItem>
        ).toArray()}
      </ListGroup>
    );
  }

});

export const ListComponent = connect(function(state: any) {
    return {
        list: state.list
    };
})(DisconnectedListComponent);
