import React from 'react';

import { useSelector } from 'react-redux'

import WordList from './WordList'

import './Output.scss'

const Output = () => {

  const { words } = useSelector(state => ({
    words: state.words,
  }))

  return (
    <>
      <div className="output-container">
        <div className="output-title">Output</div>
        <div className="output-wordlist"><WordList words={words}/>&nbsp;</div>
      </div>
      <div style={{padding: '14px 4px'}}>The wordlist only contains the words: <br/> apple, banana, pear, peach, mango <br/> &amp; grapes</div>
    </>
  );
}

export default Output;
