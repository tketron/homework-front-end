import React, { Component } from 'react';

import './GIFCardModal.css';

export default class GIFCardModal extends Component {
  render() {
    return (
      <div className="GIFCardModal" onClick={this.props.onClick}>
        <div className="GIFCardModal-main">
          <div className="GIFCardModal-img-container">
            <img src={this.props.gif.images.downsized.url} />
          </div>
          <div className="GIFCardModal-gif-details-container">
            <p>
              {this.props.gif.title} uploaded by {this.props.gif.username}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
