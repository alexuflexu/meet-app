Feature: Specify Number of Events

Scenario: When user has not specified a number, 32 is the default number
  Given the user has opened the Meet app
  When the user views the list of events without specifying a number
  Then 32 events should be displayed by default

Scenario: User can change the number of events displayed
  Given the user has just opened the app
  When the user changes the value of the number of events input field
  Then the number of events in the list will change accordingly