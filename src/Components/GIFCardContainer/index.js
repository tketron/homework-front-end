import React, { Component } from 'react';
import axios from 'axios';

import GIFCard from '../GIFCard';
import './GIFCardContainer.css';

export default class GIFCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      queryPath: this.props.queryURL,
      gifs: []
    };
  }

  componentDidMount() {
    console.log('mounted');
    this.updateGIFs();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.queryPath);
    if (prevState.queryPath !== this.props.queryURL) {
      console.log('updated');

      this.setState({ queryPath: this.props.queryURL }, () => {
        this.updateGIFs();
      });
    }
  }

  updateGIFs() {
    console.log('update GIFs called');
    axios
      .get(this.state.queryPath, {})
      .then(data => {
        this.setState({ gifs: data.data.data });
      })
      .catch(err => console.error(err));
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
