import React, { Component } from 'react';

import './GIFCard.css';

export default class GIFCard extends Component {
  render() {
    return (
      <div className="GIFCard">
        <img src={this.props.gif.images.fixed_height.url} />
        {/* {this.props.gif.title} */}
      </div>
    );
  }
}
