import React from 'react'
import {List} from 'immutable';
import {connect} from 'react-redux';

import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';

const DisconnectedSumComponent = React.createClass({
  propTypes: {
    sum: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <p>
        Sum: {this.props.sum}
        </p>
    )
  }

});

export const SumComponent = connect(function(state: any) {
    return {
        sum: state.sum
    };
})(DisconnectedSumComponent);
