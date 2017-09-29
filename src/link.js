// @flow

import React, { PureComponent } from 'react';

type PropTypes = {
  page: array,
  children: any,
};

const createLinkComponent = (pathname, updatePage) =>
  class extends PureComponent {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      const { page } = this.props;

      updatePage(page);
      event.preventDefault();
    }

    props: PropTypes;

    render() {
      const { children, page } = this.props;
      const href = `${pathname}?page=${page}`;

      return (
        <a href={href} onClick={this.handleClick}>
          {children}
        </a>
      );
    }
  };

export default createLinkComponent;
