import React, { Component } from "react";
import { ErrorAlert, WarningAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    if (value <= 0) {
      this.setState({
        infoText: "The value must be at least 1",
      });
    } else {
      this.setState({
        infoText: "",
      });
      this.props.updateEvents(null, null, value);
    }
    if (value >= 50) {
      this.setState({
        infoTextWarning: "Event must be less than 50",
      });
    } else {
      this.setState({
        infoTextWarning: "",
      });
      this.props.updateEvents(null, null, value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <div className="text-alert">
          <ErrorAlert text={this.state.infoText} />
          <WarningAlert text={this.state.infoTextWarning} />
        </div>
        <label>Number of results</label>
        <input
          type="text"
          id="NumberOfEventsInput"
          placeholder="32"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
