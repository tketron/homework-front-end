import React, { Component } from 'react';

import SearchBarButton from './SearchBarButton';

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

  // Autofocus text input
  componentDidUpdate() {
    this.setState({ searchTerm: '' });
    this.searchBarInput && this.searchBarInput.focus();
  }

  handleSearchInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchSubmitClick = e => {
    // e.stopPropagation();
    this.state.searchTerm &&
      this.props.onSearchChange(this.state.isSearch, this.state.searchTerm);
  };

  handleSearchTypeToggle = () => {
    this.setState(
      prevState => ({
        // searchTerm: '',
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
            <div>
              <input
                type="text"
                id="SearchBar-search-input"
                ref={el => (this.searchBarInput = el)}
                value={this.state.searchTerm}
                onChange={this.handleSearchInputChange}
              />
            </div>
            <div>
              <SearchBarButton
                onClick={this.handleSearchSubmitClick}
                enabled={this.state.searchTerm ? true : false}
              >
                Search!
              </SearchBarButton>
              <SearchBarButton
                onClick={this.handleSearchTypeToggle}
                enabled={true}
              >
                View Trending GIFs
              </SearchBarButton>
            </div>
          </div>
        ) : (
          <div className="SearchBar-trending">
            <SearchBarButton
              onClick={this.handleSearchTypeToggle}
              enabled={true}
            >
              Search for GIFs
            </SearchBarButton>
          </div>
        )}
      </div>
    );
  }
}
