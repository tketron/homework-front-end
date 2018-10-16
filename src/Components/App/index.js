import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar';
import GIFCardContainer from '../GIFCardContainer';

export default class App extends Component {
  handleQueryChange = (isSearch, query) => {
    console.log(isSearch);
    console.log(query);
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchChange={this.handleQueryChange} />
        <GIFCardContainer />
      </div>
    );
  }
}
