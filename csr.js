import React, { Component } from 'react';

const csr = function (Wrapped, placeholder) {
  class CsrComponent extends Component {
    state = {
      needsRender: false,
    }

    componentDidMount() {
      this.state.needsRender = true;
    }

    render() {
      if (!this.state.needsRender) {
        return placeholder;
      }

      return <Wrapped {...this.props} />;
    }
  }

  return CsrComponent;
};

export default csr;
