import React from "react";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import { mockEvents } from "../mock-events";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("If user hasn’t specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("the user hasn’t specified a number of events", () => {});

    let AppWrapper;

    when("they are viewing the events", () => {
      AppWrapper = mount(<App />);
    });

    then("the number of events will default to 32", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the user wants to change number of events they can see", () => {
      AppWrapper = mount(<App />);
    });

    when("they are currently at the default list", () => {
      const NumberOfEvents = { target: { value: 13 } };
      AppWrapper.find(".numberOfEvents").simulate("change", NumberOfEvents);
    });

    then(
      "the specific number of events will change by the user’s request",
      () => {
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        NumberOfEventsWrapper.setState({ NumberOfEvents: 13 });
        expect(NumberOfEventsWrapper.state("NumberOfEvents")).toBe(13);
      }
    );
  });
});
