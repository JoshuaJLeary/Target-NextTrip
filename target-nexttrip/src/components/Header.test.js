import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header></Header>, div);
});

it('renders Header correctly', () => {
 const { getByTestId } = render(<Header></Header>);
 expect(getByTestId('header')).toHaveTextContent('');
});

it('matches snapshot', () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
})