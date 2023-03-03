import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(err) {
    console.log(err);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}
