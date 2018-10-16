import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  state = {
    isSearch: true,
    searchTerm: ''
  };

  handleSearchBarChange = e => {
    this.setState({ searchTerm: e.target.value }, () => {
      this.props.onSearchChange(this.state.isSearch, this.state.searchTerm);
    });
  };

  handleSearchTypeToggle = () => {
    this.setState(state => {
      this.props.onSearchChange(!state.isSearch);
      return { isSearch: !state.isSearch };
    });
  };

  render() {
    return (
      <div className="SearchBar">
        {this.state.isSearch ? (
          <div>
            Search:{' '}
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleSearchBarChange}
            />
            <button onClick={this.handleSearchTypeToggle}>
              Trending Instead?
            </button>
          </div>
        ) : (
          <div>
            Trending
            <button onClick={this.handleSearchTypeToggle}>
              Search instead
            </button>
          </div>
        )}
      </div>
    );
  }
}
