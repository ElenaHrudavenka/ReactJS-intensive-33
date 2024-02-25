import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Class component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Class component/i);
  expect(linkElement).toBeInTheDocument();
});
