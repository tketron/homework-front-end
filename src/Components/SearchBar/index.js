import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this._trendingText = 'T R E N D I N G G I F E A Z E';
    // this._searchingText = 'S E A R C H F O R G I F S';
    this._trendingText = 'Trending Gifeaze';
    this._searchingText = 'Search for GIFs';
    this.state = {
      isSearch: false,
      searchTerm: '',
      headerMessage: this._trendingText
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
        isSearch: !prevState.isSearch,
        headerMessage:
          prevState.headerMessage === this._trendingText
            ? this._searchingText
            : this._trendingText
      }),
      () => {
        this.props.onSearchChange(this.state.isSearch);
      }
    );
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-header-text">{this.state.headerMessage}</div>
        {this.state.isSearch ? (
          <div className="SearchBar-search">
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
          <div className="SearchBar-trending">
            <button onClick={this.handleSearchTypeToggle}>
              Search instead
            </button>
          </div>
        )}
      </div>
    );
  }
}
