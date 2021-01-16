import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders with title', () => {
  render(<App />);

  const title = screen.getByText(/React Testing Library Test Playground/i);

  expect(title).toBeInTheDocument();
});

test('renders with minus button disabled', () => {
  render(<App />);

  const minusButton = screen.getByText(/-/i);

  expect(minusButton).toBeDisabled();
});

test('increases count when incrementing', () => {
  render(<App />);

  const plusButton = screen.getByText(/\+/i);
  
  fireEvent.click(plusButton);

  const count = screen.getByTestId('count')

  expect(count).toHaveTextContent("1");
});

test('minus is not disabled when incrementing', () => {
  render(<App />);
  
  const plusButton = screen.getByText(/\+/i);

  fireEvent.click(plusButton);

  const minusButton = screen.getByText(/-/i)
  
  expect(minusButton).toBeEnabled()
});
