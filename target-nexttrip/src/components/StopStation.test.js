import React from 'react';
import ReactDOM from 'react-dom';
import StopStation from './StopStation';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reduxStore';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const mockStopStation = [
  {
    Text: 'Target Field Station Platform 1',
    Value: 'TF12'
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
      <StopStation nextTripRouteStop={mockStopStation}/>
    </Provider>, div);
});

it('renders StopStation correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <StopStation nextTripRouteStop={mockStopStation}/>
    </Provider>);
  expect(getByTestId('stopStation')).toHaveTextContent('Target Field Station Platform 1');
 });

 it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <StopStation nextTripRouteStop={mockStopStation}/>
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
