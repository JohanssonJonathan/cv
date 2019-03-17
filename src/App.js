import React, { Component } from "react";
import Enter from "./Enter.js";
import Cv from "./Cv.js";
import "./css/App.css";

class App extends Component {
  state = {
    showCv: false
  };

  toggleCvModal = checkout => {
    this.setState({
      showCv: checkout ? false : true
    });
  };

  render() {
    const { showCv } = this.state;
    return (
      <div className="App">
        <Enter showCv={showCv} toggleCvModal={this.toggleCvModal} />
        <Cv toggleCvModal={this.toggleCvModal} showCv={showCv} />
      </div>
    );
  }
}

export default App;
