import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import WordList from './WordList'


test('renders <WordList/> with two elements', async () => {
  const mockWords = ['apples', 'oranges']
  const { container } = render(<WordList words={mockWords}/>)
  expect(container.children.length).toBe(2);
})

test('renders <WordList/> with no elements', async () => {
  const mockWords = []
  const { container, getByText } = render(<WordList words={mockWords}/>)
  expect(container.children.length).toBe(1);

  const linkElement = getByText(/No words/)
  expect(linkElement).toBeInTheDocument();
})