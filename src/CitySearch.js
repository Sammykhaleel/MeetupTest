import React, { Component } from "react";
import { getSuggestions } from "./api";
import { mockEvents } from "./mock-events";

class CitySearch extends Component {
  state = {
    query: "Munich",
    suggestions: [],
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value, suggestions: [] });
    getSuggestions(value).then((suggestions) => this.setState({ suggestions }));
  };

  handleItemClicked = (value, lat, lot) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lot);
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((item) => (
            <li
              key={item.name_string}
              onClick={() =>
                this.handleItemClicked(item.name_string, item.lat, item.lon)
              }
            >
              {item.name_string}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
