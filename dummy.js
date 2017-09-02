import PropTypes from 'prop-types';
import React, { Component } from 'react';

import csr from '../../csr-only';

class Dummy extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    return (
      <div>
        Hello I am {this.props.name}
      </div>
    );
  }
}

export default csr(Dummy, <div>dummy placeholder</div>);
