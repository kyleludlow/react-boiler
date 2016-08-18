import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starter: 'Welcome to my React-Boiler.'
    };
  }

  render() {

    return (
      <div>
        {this.state.starter}
      </div>
    );
  }
}
