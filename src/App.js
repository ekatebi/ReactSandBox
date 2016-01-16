import React, { Component } from 'react';
import { NICE, BLUE, RED, SUPER_NICE } from './colors';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={9} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}

export class AppRed extends Component {
  render() {
    return (
      <div>
        <Counter increment={3} color={RED} />
      </div>
    );
  }
}  

export class AppBlue extends Component {
  render() {
    return (
      <div>
        <Counter increment={6} color={BLUE} />
      </div>
    );
  }
}
