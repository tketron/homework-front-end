import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import GIFCardModal from '../GIFCardModal';
import './GIFCard.css';

export default class GIFCard extends Component {
  state = {
    modalOpen: false,
    loading: true
  };

  handleImageLoad = () => {
    this.setState({ loading: false });
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
        <img
          src={this.props.gif.images.fixed_height.url}
          alt={this.props.gif.title}
          className="GIFCard-gif"
          onLoad={this.handleImageLoad}
        />
        {this.state.loading && (
          <div className="GIFCard-loading">
            <ReactLoading
              type="bubbles"
              color="#000"
              height="20%"
              width="20%"
            />
          </div>
        )}
        {this.state.modalOpen && (
          <GIFCardModal gif={this.props.gif} onClick={this.handleModalClose} />
        )}
      </div>
    );
  }
}
