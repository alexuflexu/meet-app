import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import { getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents 
        currentNOE={32} 
        setCurrentNOE={() => {}} 
        setErrorAlert={() => {}} 
      />);
  });

  test('contains an element with the role of textbox', () => { 
    const input = NumberOfEventsComponent.queryByRole('textbox');
    expect(input).toBeInTheDocument(); 
  });

  test('default number of events is 32', () => {
    expect(Number(NumberOfEventsComponent.getByRole('textbox').value)).toBe(32);  
  });

  test('value changes when user types in the textbox', async () => {
    const user = userEvent; 
    const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
    const allEvents = await getEvents(); 
    await user.type(numberOfEvents, '{backspace}{backspace}10');   
    NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} setErrorAlert={() => {}} />);   
    expect(numberOfEvents).toHaveValue('10'); 
  });
});