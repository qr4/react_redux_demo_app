import React from 'react'
import {List} from 'immutable';
import {connect} from 'react-redux';

import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';

const DisconnectedSumComponent = React.createClass({
  propTypes: {
    list: React.PropTypes.instanceOf(List).isRequired
  },

  render: function() {
    return (
      <p>
        Sum: {this.props.list.reduce((a, b) => a+b, 0)}
      </p>
    )
  }

});

export const SumComponent = connect(function(state) {
    return {
        list: state.list
    };
})(DisconnectedSumComponent);
