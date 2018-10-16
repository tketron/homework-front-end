import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import './GIFCardModal.css';

export default class GIFCardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  handleImageLoad = () => {
    console.log('loaded');
    this.setState({ loading: false });
  };

  render() {
    return (
      <div className="GIFCardModal" onClick={this.props.onClick}>
        <div className="GIFCardModal-modal">
          <div className="GIFCardModal-contents">
            <div className="GIFCardModal-gif-container">
              <img
                src={this.props.gif.images.downsized.url}
                alt={this.props.gif.title}
                className="GIFCardModal-gif"
                onLoad={this.handleImageLoad}
              />
              {this.state.loading && (
                <div className="GIFCardModal-loading">
                  <ReactLoading
                    type="bubbles"
                    color="#000"
                    height="20%"
                    width="20%"
                  />
                </div>
              )}
            </div>
            <div className="GIFCardModal-gif-details-container">
              <p className="GIFCardModal-gif-details-text">
                {this.props.gif.title} <em>uploaded by</em>{' '}
                {this.props.gif.username}
              </p>
              <p className="GIFCardModal-gif-details-link">
                <a
                  href={this.props.gif.bitly_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Giphy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
