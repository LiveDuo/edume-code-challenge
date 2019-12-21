import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
const mockStore = configureStore([thunk])

import Numpad from './Numpad'

test('renders <Numpad/>', async () => {
  const store = mockStore({words: null})
  const { getByText, getByPlaceholderText } = render(<Provider store={store}><Numpad/></Provider>)

  const button2 = getByText('2 (ABC)')
  fireEvent.click(button2)
  const button3 = getByText('3 (DEF)')
  fireEvent.click(button3)
  
  const input = getByPlaceholderText('Type or use the numpad')
  expect(input.value).toBe('23')
  
  const buttonB = getByText('Backspace')
  fireEvent.click(buttonB)
  
  expect(input.value).toBe('2')
  
  const buttonC = getByText('Clear')
  fireEvent.click(buttonC)
  
  expect(input.value).toBe('')
  
  fireEvent.click(button3)

  expect(input.value).toBe('3')
})
