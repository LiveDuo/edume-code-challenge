import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Title from './Title'

test('renders <Title/>', async () => {
  const { getByText } = render(<Title/>)
  const linkElement = getByText(/Numpad/)
  expect(linkElement).toBeInTheDocument();
})