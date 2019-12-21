import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Output from './Output'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

test('renders <Output/>', async () => {
  const store = mockStore({words: null})
  const { getByText } = render(<Provider store={store}><Output/></Provider>)
  const linkElement = getByText(/Output/)
  expect(linkElement).toBeInTheDocument();
})