import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppComponent;
    let EventListDOM;
    given('the user has opened the Meet app', () => {
        AppComponent = render(<App />);
    });

    when('the user views the list of events without specifying a number', () => {
        const AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector('#event-list');
    });

    then('32 events should be displayed by default', async () => {
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
    });
  });

  test('User can change the number of events displayed', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    given('the user has just opened the app', () => {
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector('#event-list');
    });

    when('the user changes the value of the number of events input field', async () => {
        const user = userEvent.setup();
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
        await user.type(numberOfEventsInput, '{backspace}{backspace}10');
        expect(numberOfEventsInput.value).toBe('10');   
    }); 

    then('the number of events in the list will change accordingly', async () => {
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(10);
        });         
    });
  });
});