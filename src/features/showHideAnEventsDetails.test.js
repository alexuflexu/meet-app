import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user has opened the Meet app', () => {

    });

    when('the user views the list of events', () => {

    });

    then('each event element should be collapsed by default', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user is viewing the list of events in the Meet app', () => {

    });

    when('the user clicks on a collapsed event element', () => {

    });

    then('the event element should expand to show its details', () => {

    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user is viewing an expanded event element', () => {

    });

    when('the user clicks on the expanded event element', () => {

    });

    then('the event element should collapse to hide its details', () => {

    });
  });
});