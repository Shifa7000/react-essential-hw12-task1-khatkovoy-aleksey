import React from "react";
import Clock from "../Clock";
import "./index.css";

class App extends React.Component {
  state = { flag: true };
  render() {
    return (
      <div className="App">
        {this.state.flag && <Clock />}
        <button onClick={() => this.setState({ flag: !this.state.flag })}>Show/Hide</button>
      </div>
    );
  }
}

export default App;
