import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import displayAction from "./action/displayAction";
import Display from "./componetns/display/display"
class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <div id="display">Name of instrument</div>
        <Display displayMessage={this.state.displayMessage} />
        <div id="drum" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  displayAction: () => dispatch(displayAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
