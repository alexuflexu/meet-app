# Meet App


## Feature 1: Filter Events By City

### Scenario 1: When user hasn't searched for a specific city, show upcoming events from all cities
- **Given** user hasn't searched for any city  
- **When** the user opens the app  
- **Then** the user should see a list of upcoming events  

### Scenario 2: User should see a list of suggestions when they search for a city
- **Given** the main page is open  
- **When** user starts typing in the city textbox  
- **Then** the user should receive a list of cities (suggestions) that match what they've typed  

### Scenario 3: User can select a city from the suggested list
- **Given** user was typing "Berlin" in the city textbox AND the list of suggested cities is showing  
- **When** the user selects a city (e.g., "Berlin, Germany") from the list  
- **Then** their city should be changed to that city (i.e., "Berlin, Germany") AND the user should receive a list of upcoming events in that city  


## Feature 2: Show/Hide Event Details

### Scenario 1: An event element is collapsed by default
- **Given** the user is on the main page  
- **When** the user views the list of events  
- **Then** each event element should be collapsed, showing only basic information  

### Scenario 2: User can expand an event to see its details
- **Given** the user is viewing a collapsed event element  
- **When** the user clicks on the "Show Details" button for the event  
- **Then** the event element should expand to show additional details  

### Scenario 3: User can collapse an event to hide its details
- **Given** the user is viewing an expanded event element  
- **When** the user clicks on the "Hide Details" button for the event  
- **Then** the event element should collapse, hiding the additional details  


## Feature 3: Specify Number of Events

### Scenario 1: When user hasn't specified a number, 32 is the default number
- **Given** the user has not specified a number of events to display  
- **When** the user views the event list  
- **Then** 32 events should be displayed by default  

### Scenario 2: User can change the number of events they want to see
- **Given** the user is on the main page  
- **When** the user specifies a number of events to display  
- **Then** the specified number of events should be displayed


## Feature 4: Use the App When Offline

### Scenario 1: Show cached data when there's no internet connection
- **Given** the user has no internet connection  
- **When** the user opens the app  
- **Then** the app should display cached data from the last session  

### Scenario 2: Show error when user changes the settings (city, time range)
- **Given** the user has no internet connection  
- **When** the user attempts to change settings like city or time range  
- **Then** the app should display an error message  


## Feature 5: Add an App Shortcut to the Home Screen

### Scenario 1: User can install the meet app as a shortcut on their device home screen
- **Given** the user is on the meet app website  
- **When** the user selects the option to add the app to their home screen  
- **Then** the app should be installed as a shortcut on the user's device home screen 


## Feature 6: Display Charts Visualizing Event Details

### Scenario 1: Show a chart with the number of upcoming events in each city
- **Given** the user is on the events page  
- **When** the user selects the option to view event statistics  
- **Then** a chart should be displayed showing the number of upcoming events in each city 
