Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default
  Given the user has opened the Meet app
  When the user views the list of events
  Then each event element should be collapsed by default

Scenario: User can expand an event to see its details
  Given the user is viewing the list of events in the Meet app
  When the user clicks on a collapsed event element
  Then the event element should expand to show its details

Scenario: User can collapse an event to hide its details
  Given the user is viewing an expanded event element
  When the user clicks on the expanded event element
  Then the event element should collapse to hide its details