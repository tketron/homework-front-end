import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar';
import GIFCardContainer from '../GIFCardContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryURL: `http://api.giphy.com/v1/gifs/trending?api_key=${
        process.env.REACT_APP_GIPHY_KEY
      }`
    };
  }

  handleQueryChange = (isSearch, query = '') => {
    let url;
    if (isSearch) {
      url = `http://api.giphy.com/v1/gifs/search?q=${query}&`;
    } else {
      url = `http://api.giphy.com/v1/gifs/trending?`;
    }
    this.setState({
      queryURL: `${url}api_key=${process.env.REACT_APP_GIPHY_KEY}`
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchChange={this.handleQueryChange} />
        <GIFCardContainer queryURL={this.state.queryURL} />
      </div>
    );
  }
}
