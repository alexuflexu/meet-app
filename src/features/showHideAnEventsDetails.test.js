import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;
    given('the user has opened the Meet app', () => {
      AppComponent = render(<App />);
    });

    when('the user views the list of events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
    });
  }); 

    then('each event element should be collapsed by default', () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('event-details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the user is viewing the list of events in the Meet app', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
    });

    when('the user clicks the show details button', async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText('show details');
      await user.click(showDetails);
    });

    then('the event details should expand', () => {
      const eventDetails = EventComponent.container.querySelector('.event-details');
      expect(eventDetails).toBeInTheDocument();

    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given('the user has clicked the show details button', async () => {
      const user = userEvent.setup();
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />)
      const showDetails = EventComponent.queryByText('show details');
      await user.click(showDetails);
    });

    when('the user clicks the hide details button', async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />)
      const hideDetails = EventComponent.queryByText('hide details');
      await user.click(hideDetails);
    });

    then('the event details should be hidden', () => {
      let AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
        const eventDetails = AppDOM.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });
  });
});