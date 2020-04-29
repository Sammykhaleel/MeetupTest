import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  updateEvents = () => {};
  render() {
    return (
      <div className="App">
        <EventList />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
