import React, { Component } from 'react';

import GIFCardModal from '../GIFCardModal';
import './GIFCard.css';

export default class GIFCard extends Component {
  state = {
    modalOpen: false
  };

  handleModalClose = e => {
    e.stopPropagation();
    this.setState({ modalOpen: false });
  };

  handleModalOpen = e => {
    this.setState({ modalOpen: true });
  };

  render() {
    return (
      <div className="GIFCard" onClick={this.handleModalOpen}>
        <img src={this.props.gif.images.fixed_height.url} />
        {this.state.modalOpen && (
          <GIFCardModal gif={this.props.gif} onClick={this.handleModalClose} />
        )}
      </div>
    );
  }
}
