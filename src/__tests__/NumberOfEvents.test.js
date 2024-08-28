import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('contains an element with the role of textbox', () => {
    const textbox = screen.getByRole('textbox');
    expect(textbox).toBeInTheDocument();
  });

  test('default value of the input field is 32', () => {
    const textbox = screen.getByRole('textbox');
    expect(textbox).toHaveValue('32');
  });

  test('value changes when user types in the textbox', async () => {
    const textbox = screen.getByRole('textbox');
    await userEvent.type(textbox, '{backspace}{backspace}10');
    expect(textbox).toHaveValue('10');
  });
});
