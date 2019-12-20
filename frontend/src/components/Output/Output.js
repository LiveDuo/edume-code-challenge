import React from 'react';

import { useSelector } from 'react-redux'

import WordList from './WordList'

import './Output.css'

const Output = () => {

  const { words } = useSelector(state => ({
    words: state.words,
  }))

  return (
    <div className="output-container">
      <div className="output-title">Output</div>
      <div className="output-wordlist"><WordList words={words}/>&nbsp;</div>
    </div>
  );
}

export default Output;
