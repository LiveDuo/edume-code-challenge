import React, { useState } from 'react';
import './App.css';

const WordList = props => {
  if (props.words && props.words.length) {
    return props.words.map(word => <span key={Math.random()} style={{display: 'inline-block', color: 'white', margin: '4px', backgroundColor: '#3cac48', padding: '4px 8px', borderRadius: '4px'}}>{word}</span>)
  } else {
    return <span>No words</span>
  }
}

const App = () => {

  const [input, setInput ] = useState('')
  const [outputWords, setOutputWords ] = useState(null)

  const onClick = (num) => {
    // console.log(`clicked ${num}`)
    setInput(input + num)
  }
  
  const clear = () => {
    setInput('')
  }

  const backspace = () => {
    setInput(input.slice(0, -1))
  }

  const send = async () => {
    const response = await fetch(`/v1/t9/calculate?nums=${input}`)
    const data = await response.json()
    setOutputWords(data)
  }

  var containsOnlyNumbers = (str) => /^\d+$/.test(str);

  const onChange = (text) => {
    if (containsOnlyNumbers(text) || text === '') {
      setInput(text)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      send()
    }
  }

  return (
    <div>
      <div style={{boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)', marginTop: '20px', textAlign: 'center'}}>
        <div style={{padding: '4px', fontSize: '20px', backgroundColor: '#3cac48', color: 'white'}}>Numpad</div>
      </div>

      <div style={{boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)', marginTop: '20px', border: '1px #eee solid'}}>
        <div style={{display: 'flex'}}>
          <input className="input" placeholder="Type or use the numpad" style={{flex: 1}} onChange={e => onChange(e.target.value)} value={input} onKeyDown={handleKeyDown}/>
          <button onClick={send} style={{width: '80px', backgroundColor: '#3cac48', color: 'white'}}>Send</button>
        </div>
        <div>
          <button className="button" onClick={() => onClick(1)}>1 (,.?!)</button>
          <button className="button" onClick={() => onClick(2)}>2 (ABC)</button>
          <button className="button" onClick={() => onClick(3)}>3 (DEF)</button>
        </div>
        <div>
          <button className="button" onClick={() => onClick(4)}>4 (GHI)</button>
          <button className="button" onClick={() => onClick(5)}>5 (JKL)</button>
          <button className="button" onClick={() => onClick(6)}>6 (MNO)</button>
        </div>
        <div>
          <button className="button" onClick={() => onClick(7)}>7 (PQRS)</button>
          <button className="button" onClick={() => onClick(8)}>8 (TUV)</button>
          <button className="button" onClick={() => onClick(9)}>9 (WXYZ)</button>
        </div>
        <div>
          <button className="button" onClick={backspace}>Backspace</button>
          <button className="button" onClick={clear} disabled>&nbsp;</button>
          <button className="button" onClick={clear}>Clear</button>
        </div>
      </div>

      <div style={{boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)', marginTop: '20px', textAlign: 'center'}}>
        <div style={{padding: '4px', backgroundColor: '#3cac48', color: 'white'}}>Output</div>
        <div style={{padding: '4px'}}><WordList words={outputWords}/>&nbsp;</div>
      </div>
    </div>
  );
}

export default App;
