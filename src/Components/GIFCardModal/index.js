import React, { Component } from 'react';

import './GIFCardModal.css';

export default class GIFCardModal extends Component {
  render() {
    return (
      <div className="GIFCardModal">
        <div className="GIFCardModal-main">
          <img src={this.props.gif.images.downsized.url} />
          <p>{this.props.gif.title}</p>
          <button onClick={this.props.onClick}>Close</button>
        </div>
      </div>
    );
  }
}
