import React, { Component } from 'react';

import './GIFCardModal.css';

export default class GIFCardModal extends Component {
  render() {
    return (
      <div className="GIFCardModal">
        <button onClick={this.props.onClick}>Close</button>
      </div>
    );
  }
}
