import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import GIFCard from '../GIFCard';
import './GIFCardContainer.css';

export default class GIFCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      queryPath: this.props.queryURL,
      gifs: [],
      offset: 0
    };
  }

  componentDidMount() {
    this.updateGIFs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.queryPath !== this.props.queryURL) {
      this.setState({ queryPath: this.props.queryURL, loading: true }, () => {
        this.updateGIFs();
      });
    }
  }

  fetchMoreGIFs() {
    axios
      .get(`${this.state.queryPath}&offset=${this.state.offset}`, {})
      .then(data => {
        this.setState(prevState => ({
          gifs: [...prevState.gifs, ...data.data.data],
          loading: false,
          offset: data.pagination.count + data.pagination.offset
        }));
      })
      .catch(err => console.error(err));
  }

  updateGIFs() {
    axios
      .get(this.state.queryPath, {})
      .then(data => {
        this.setState({
          gifs: data.data.data,
          loading: false,
          offset: data.pagination.count + data.pagination.offset
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="GIFCardContainer">
        {this.state.gifs.map(gif => (
          <GIFCard key={gif.id} gif={gif} />
        ))}
        {this.state.loading && (
          <div className="GIFCardContainer-loading">
            <ReactLoading
              id="GIFCardContainer-loading-animation"
              type="bubbles"
              color="#fff"
              height="20%"
              width="20%"
            />
          </div>
        )}
      </div>
    );
  }
}
