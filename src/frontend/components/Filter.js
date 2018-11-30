/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */

'use strict';

import React from 'react';

export default class Filter extends React.Component<$FlowFixMe> {
  // $FlowFixMe
  constructor(props) {
    super(props);

    // $FlowFixMe
    this.state = {
      matchTerm: '',
      matchType: 'idtype',
      searchDetailsOpen: false,
    };

    // $FlowFixMe
    this.inputRef = null;
    // $FlowFixMe
    this.typeSelectRef = null;
  }

  getMatch() {
    return {
      // $FlowFixMe
      matchType: this.state.matchType,
      // $FlowFixMe
      matchTerm: this.state.matchTerm,
    };
  }

  showSearchDetails = () => {
    // $FlowFixMe
    this.setState({
      searchDetailsOpen: true,
    });
  };

  hideSearchDetails = () => {
    // $FlowFixMe
    this.setState({
      searchDetailsOpen: false,
    });
  };

  handleSearchChange = () => {
    // $FlowFixMe
    this.props.handleChange(this.inputRef.value);
  };

  // $FlowFixMe
  _setDOMNodes = (matchTerm, matchType) => {
    // $FlowFixMe
    this.inputRef.value = matchTerm;
    // $FlowFixMe
    this.typeSelectRef.querySelectorAll(
      `[data-option-name=${matchType}]`,
    )[0].selected = true;
  };

  handleClickOutside = () => {
    this.hideSearchDetails();
  };

  render() {
    return (
      <div style={containerStyle}>
        <input
          type="text"
          style={inputStyle}
          placeholder={this.props.placeholder}
          onFocus={this.showSearchDetails}
          onChange={this.handleSearchChange}
          // $FlowFixMe
          ref={input => (this.inputRef = input)}
        />
      </div>
    );
  }
}

const containerStyle = {
  padding: '4px',
  border: 'solid 1px #ddd',
  borderRight: 'none',
  borderTop: 'none',
};

const inputStyle = {
  overflow: 'visible',
  border: 0,
  width: '100%',
  outline: 'none',
};
