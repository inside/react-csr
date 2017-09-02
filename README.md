# react-csr

A React HOC responsible for client side rendering components from your server side rendered application

## Usage

```
// dummy.js
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import csr from 'react-csr'

class Dummy extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    return (
      <div>Hello I am {this.props.name}</div>
    )
  }
}

export default csr(Dummy, <div>dummy placeholder</div>)
```
```
// App.js
<Dummy name="toto" />
```
