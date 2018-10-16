import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar';
import GIFCardContainer from '../GIFCardContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <GIFCardContainer />
      </div>
    );
  }
}
