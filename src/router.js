// @flow

import React, { Component } from 'react';
import qs from 'qs';

type PropTypes = {
  routes: array,
  fallback: any,
  children: any,
};

const createRouterComponent = createLinkComponent =>
  class extends Component {
    constructor() {
      super();

      this.pathname = window.location.pathname;
      this.createInitialState();
      this.Link = createLinkComponent(this.pathname, this.updatePage);
    }

    getRoute = () => {
      const { routes } = this.props;
      const { page = 'null' } = this.state;
      const [
        currentRoute = {
          page,
          jsx: this.props.fallback,
        },
      ] = routes.filter(route => route.page === page);

      return currentRoute;
    };

    getQueryParams = () => {
      const { search } = window.location;

      return qs.parse(search, { ignoreQueryPrefix: true });
    };

    props: PropTypes;

    createInitialState = () => {
      const { page = null } = this.getQueryParams();

      this.state = { page };
    };

    updatePage = page => {
      const queryParams = this.getQueryParams();
      const queryString = qs.stringify({ ...queryParams, page }, { addQueryPrefix: true });

      this.setState({ ...this.state, page });
      history.pushState({}, page, `${this.pathname}${queryString}`);
    };

    render = () => {
      const route = this.getRoute();
      const { children } = this.props;

      return (
        <div>
          {children({
            ...route,
            Link: this.Link,
          })}
        </div>
      );
    };
  };

export default createRouterComponent;
