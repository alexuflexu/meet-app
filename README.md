# Meet App

## Project Description
The Meet App is a serverless progressive web application (PWA) built with React. It allows users to discover upcoming events based on their selected city and preferences. Utilizing the Google Calendar API, the app provides functionalities like filtering events by city, displaying event details, and visualizing data through charts.

## Tech Stack
- React: Front-end library for building user interfaces.
- Moment.js: Date manipulation library.
- Recharts: Charting library for visualizing event data.
- Workbox: Libraries for handling service workers and offline capabilities.
- Atatus: Application performance monitoring.

## Dependencies
The project relies on several npm packages. Below is a list of key dependencies:

- react: Frontend framework
- moment: Date handling
- recharts: Charting
- workbox-*: Service worker utilities
- react-toastify: Notifications
- Testing libraries: @testing-library/*

### Installation

## How to Clone
To clone the repository, run: `git clone https://github.com/alexuflexu/meet-app.git`

## Install dependencies:

   ```sh
   npm install
   ```

## How to Launch the Project
To start the development server, use:

   ```sh
   npm start
   ```
This will open the app in your default browser at http://localhost:3000.

## User Stories and Features 

## Feature 1: Filter Events by City

### Scenario 1: When user hasn't searched for a city, show upcoming events from all cities
* Given user hasn't searched for any city
* When the user opens the app
* Then the user should see a list of all upcoming events

### Scenario 2: User should see a list of suggestions when they search for a city
* Given the main page is open
* When user starts typing in the city textbox
* Then the user should receive a list of cities (suggestions) that match what they've typed

### Scenario 3: User can select a city from the suggested list
* Given user was typing "Berlin" in the city textbox
* And the list of suggested cities is showing
* When the user selects a city (e.g., "Berlin, Germany") from the list
* Then their city should be changed to that city (i.e., "Berlin, Germany")
* And the user should receive a list of upcoming events in that city

## Feature 2: Show/Hide Event Details

### Scenario 1: An event element is collapsed by default
* Given the user has opened the Meet app
* When the user views the list of events
* Then each event element should be collapsed by default

### Scenario 2: User can expand an event to see its details
* Given the user is viewing the list of events in the Meet app
* When the user clicks the show details button
* Then the event details should expand

### Scenario 3: User can collapse an event to hide its details
* Given the user has clicked the show details button
* When the user clicks the hide details button
* Then the event details should be hidden

## Feature 3: Specify Number of Events

### Scenario 1: When user has not specified a number, 32 is the default number
* Given the user has opened the Meet app
* When the user views the list of events without specifying a number
* Then 32 events should be displayed by default

### Scenario 2: User can change the number of events displayed
* Given the user has just opened the app
* When the user changes the value of the number of events input field
* Then the number of events in the list will change accordingly

## Feature 4: Use the App When Offline

### Scenario 1: Show cached data when there's no internet connection
* Given the user has previously loaded event data in the Meet app
* When the user loses internet connection
* Then the app should display the cached data

### Scenario 2: Show error when user changes the settings (city, time range) offline
* Given the user is offline
* When the user attempts to change settings like city or time range
* Then the app should display an error message

## Feature 5: Add an App Shortcut to the Home Screen

### Scenario 1: User can install the Meet app as a shortcut on their home screen
* Given the user is using a supported browser
* When the user chooses to add the Meet app to their home screen
* Then a shortcut to the app should appear on their device's home screen

## Feature 6: Display Charts Visualizing Event Details

### Scenario 1: Show a chart with the number of upcoming events in each city
* Given the user is viewing the main page of the Meet app
* When the user navigates to the charts section
* Then a scatterplot chart displaying the number of upcoming events in each city should be shown

### Scenario 2: Show a chart with the popularity of event genres
* Given the user is in the charts section of the Meet app
* When the user selects the event genre visualization
* Then a pie chart displaying the popularity of event genres should be shown
