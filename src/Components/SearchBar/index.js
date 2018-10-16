import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    isSearch: false,
    searchTerm: ''
  };

  handleChange = () => {};

  render() {
    return <div>I'm the search bar</div>;
  }
}
