import React, { Component } from 'react';

import './SearchBarButton.css';

export default class SearchBarButton extends Component {
  render() {
    const { enabled, ...otherProps } = this.props;
    const buttonClass = enabled
      ? 'SearchBarButton'
      : 'SearchBarButton disabled';

    return <button className={buttonClass} {...otherProps} />;
  }
}
