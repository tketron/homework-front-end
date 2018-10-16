import React, { Component } from 'react';

import './SearchBarButton.css';

export default class SearchBarButton extends Component {
  render() {
    const { classNames, ...otherProps } = this.props;

    return <button className={`SearchBarButton`} {...otherProps} />;
  }
}
