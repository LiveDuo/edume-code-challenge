import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

test('renders learn react link', () => {
  const store = mockStore({words: null})
  const { container } = render(<Provider store={store}><App/></Provider>);
  expect(container).toBeInTheDocument();
});
