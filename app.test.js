import { render, screen } from '@testing-library/react';
import App from './app.test';

test('renders learn react link', () => {
  render(<app.test />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
