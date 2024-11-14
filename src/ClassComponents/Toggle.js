import { Component } from "react";
import Counter from "./Counter";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
  }
  removeCounter = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        {this.state.toggle && <Counter />}
        <button onClick={this.removeCounter}>Toggle Counter</button>
      </div>
    );
  }
}

export default Toggle;
