import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import GIFCard from '../GIFCardContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="App">
        <GIFCard />
      </div>
    );
  }
}
