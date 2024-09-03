Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default
  Given the user has opened the Meet app
  When the user views the list of events
  Then each event element should be collapsed by default

Scenario: User can expand an event to see its details
  Given the user is viewing the list of events in the Meet app
  When the user clicks the show details button
  Then the event details should expand

Scenario: User can collapse an event to hide its details
  Given the user has clicked the show details button
  When the user clicks the hide details button
  Then the event details should be hidden