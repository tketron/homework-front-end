import React, { Component } from 'react';

export default class GIFCard extends Component {
  render() {
    return (
      <div>
        I'm the GIFCard div
        {process.env.REACT_APP_GIPHY_KEY}
      </div>
    );
  }
}
