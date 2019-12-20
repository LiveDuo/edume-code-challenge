import React from 'react';

const WordList = props => {
  if (props.words && props.words.length) {
    return props.words.map(word => <span key={Math.random()} style={{display: 'inline-block', color: 'white', margin: '4px', backgroundColor: '#3cac48', padding: '4px 8px', borderRadius: '4px'}}>{word}</span>)
  } else {
    return <span>No words</span>
  }
}

export default WordList;
