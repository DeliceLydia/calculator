import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders correctly', () => {
  const tree = renderer
    .create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('display numbers', () => {
  render(<App />);
  const button = screen.getByText('9');
  expect(button).toBeInTheDocument();
});

test('displays operators', () => {
  render(<App />);
  const button = screen.getByText(/\+$/i);
  expect(button).toBeInTheDocument();
});

test('display result of calculation', () => {
  render(<App />);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('8'));
  fireEvent.click(screen.getByText('='));
  const result = screen.getByText('10');
  expect(result).toBeInTheDocument();
});
