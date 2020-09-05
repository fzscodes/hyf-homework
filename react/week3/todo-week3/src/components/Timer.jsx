import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.incrementCount(), 1000);
  }

  componentWillUnmount() {
    this.timerId = clearInterval();
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <p>You have used {this.state.count} seconds on this website.</p>;
  }
}
export default Timer;
