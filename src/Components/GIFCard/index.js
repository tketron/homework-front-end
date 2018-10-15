import React, { Component } from 'react';

export default class GIFCard extends Component {
  render() {
    return <div>{this.props.gif.title}</div>;
  }
}
