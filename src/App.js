import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { mockEvents } from "./mock-events";
import { getEvents } from "./api";

class App extends Component {
  // state = { events: [], lat: null, lon: null };
  state = {
    events: [],
    page: null,
    defaultCity: "",
    lat: null,
    lon: null,
  };
  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then((events) => this.setState({ events }));
  };
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
