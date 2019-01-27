import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import displayAction from "./action/displayAction";
import Display from "./componetns/display/display";
import DrumPanel from "./componetns/drumPanel/drumPanel"
class App extends Component {
  render() {
    return (
      <div id="drum-machine">
      <h1>Drum machine for FCC</h1>
        <Display instrument={this.props.displayMessage} />
     <DrumPanel /> 
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
