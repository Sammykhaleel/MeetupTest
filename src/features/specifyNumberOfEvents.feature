Feature: Specify Number of events

Scenario: If user hasn’t specified a number, 32 is the default number.
  Given the user hasn’t specified a number of events
  When they are viewing the events
  Then the number of events will default to 32

Scenario: User can change the number of events they want to see.
  Given the user wants to change number of events they can see
  When they are currently at the default list
  Then the specific number of events will change by the user’s request