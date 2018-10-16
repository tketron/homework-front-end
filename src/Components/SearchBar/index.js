import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      searchTerm: ''
    };
  }

  handleSearchBarChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchSubmitClick = e => {
    this.props.onSearchChange(this.state.isSearch, this.state.searchTerm);
  };

  handleSearchTypeToggle = () => {
    this.setState(
      prevState => ({
        isSearch: !prevState.isSearch
      }),
      () => {
        this.props.onSearchChange(this.state.isSearch);
      }
    );
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
            <button onClick={this.handleSearchSubmitClick}>Search!</button>
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
