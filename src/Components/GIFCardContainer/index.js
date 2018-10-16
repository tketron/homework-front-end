import React, { Component } from 'react';
import axios from 'axios';

import GIFCard from '../GIFCard';
import './GIFCardContainer.css';

export default class GIFCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      gifs: []
    };
  }

  componentDidMount() {
    axios
      .get(this.props.queryURL, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_KEY,
          accept: 'image/*'
        }
      })
      .then(data => {
        this.setState({ gifs: data.data.data });
      });
  }

  render() {
    return (
      <div className="GIFCardContainer">
        {this.state.gifs.map(gif => (
          <GIFCard key={gif.id} gif={gif} />
        ))}
      </div>
    );
  }
}
