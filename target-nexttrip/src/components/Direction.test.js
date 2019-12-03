import React from 'react';
import ReactDOM from 'react-dom';
import Direction from './Direction';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reduxStore';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const mockDirection = [
  {
    Text: 'EASTBOUND',
    Value: '2'
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
      <Direction nextTripRouteDirection={mockDirection}/>
    </Provider>, div);
});

it('renders Direction correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Direction nextTripRouteDirection={mockDirection}/>
    </Provider>);
  expect(getByTestId('direction')).toHaveTextContent('EASTBOUND');
 });

 it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Direction nextTripRouteDirection={mockDirection}/>
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
