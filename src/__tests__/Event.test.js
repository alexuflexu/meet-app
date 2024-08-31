import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(() => {
    render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    expect(screen.getByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    expect(screen.getByText(allEvents[0].start.dateTime)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(screen.getByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event details button with the title "show details"', () => {
    expect(screen.getByText('show details')).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const details = screen.queryByText(/event details/i); =
    expect(details).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const showDetailsButton = screen.getByText('show details');
    await userEvent.click(showDetailsButton);

    const details = screen.getByText(/event details/i);
    expect(details).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const showDetailsButton = screen.getByText('show details');
    await userEvent.click(showDetailsButton);

    const hideDetailsButton = screen.getByText('hide details');
    await userEvent.click(hideDetailsButton);

    const details = screen.queryByText(/event details/i);
    expect(details).not.toBeInTheDocument();
  });
});
