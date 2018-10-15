import React, { Component } from 'react';
import axios from 'axios';

import GIFCard from '../GIFCard';
import './GIFCardContainer.css';

export default class GIFCardContainer extends Component {
  state = {
    loading: true,
    gifs: []
  };

  componentDidMount() {
    axios
      .get('http://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: process.env.REACT_APP_GIPHY_KEY
        }
      })
      .then(data => {
        this.setState({ gifs: data.data.data });
      });
  }

  render() {
    return (
      <div>
        I'm the GIFCard div
        {this.state.gifs.map(gif => (
          <GIFCard key={gif.id} gif={gif} />
        ))}
      </div>
    );
  }
}
