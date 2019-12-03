import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reduxStore';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const mockRoute = [
  {
    Description: 'METRO Green Line',
    ProviderID: '8',
    Route: '902'
  }
];

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  (applyMiddleware(sagaMiddleware)),
);

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Route nextTripRoute={mockRoute}/>
    </Provider>, div);
});

it('renders Route correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Route nextTripRoute={mockRoute}/>
    </Provider>);
  expect(getByTestId('route')).toHaveTextContent('METRO Green Line');
 });

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Route nextTripRoute={mockRoute}/>
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
