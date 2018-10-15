import React, { Component } from 'react';
import './App.css';

import GIFCard from '../GIFCard';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <GIFCard />
      </div>
    );
  }
}
