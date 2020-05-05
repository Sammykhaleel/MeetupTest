Feature: Show or hide an events details

Scenario: An event element is collapsed by default
  Given the list of events has been loaded
  And app loaded
  When the user did not click the „Show Details“ yet
  Then the event elements are collapsed

Scenario: User can expand an event to see its details
  Given app loaded
  And the list of events has been loaded
  When the user clicks the button „show Details“
  Then the event element should expand and show more information

Scenario: User can collapse an event to hide its details
  Given the user opens the app
  And the user has finished reading the details of an event
  When the user clicks on the event again
  Then the event elements are collapsed