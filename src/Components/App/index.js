import React, { Component } from 'react';
import uuidv3 from 'uuid/v1';

import './App.css';

import SearchBar from '../SearchBar';
import GIFCardContainer from '../GIFCardContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryURL: `https://api.giphy.com/v1/gifs/trending?api_key=${
        process.env.REACT_APP_GIPHY_KEY
      }`
    };
  }

  handleQueryChange = (isSearch, query = '') => {
    let url;
    if (isSearch) {
      url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
        query
      )}&api_key=${process.env.REACT_APP_GIPHY_KEY}`;
    } else {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${
        process.env.REACT_APP_GIPHY_KEY
      }`;
    }
    this.setState({
      queryURL: url
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchChange={this.handleQueryChange} />
        <GIFCardContainer
          queryURL={this.state.queryURL}
          key={uuidv3(this.state.queryURL, uuidv3.URL)}
        />
      </div>
    );
  }
}
