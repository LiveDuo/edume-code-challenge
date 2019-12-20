import React from 'react';

import './WordList.scss'

const WordList = props => {
  if (props.words && props.words.length) {
    return props.words.map(word => <span key={Math.random()} className="output-word">{word}</span>)
  } else {
    return <span>No words</span>
  }
}

export default WordList;
