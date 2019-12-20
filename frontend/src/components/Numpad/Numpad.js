import React, { useState } from 'react';

import { useDispatch } from 'react-redux'

import { setWords } from "../../services/store/actions"

import './Numpad.css'

const containsOnlyNumbers = (str) => /^\d+$/.test(str)

const Numpad = () => {

  const dispatch = useDispatch()
  const dispatchSetWords = (nums) => dispatch(setWords(nums))

  const [input, setInput ] = useState('')

  const onClick = (num) => {
    setInput(input + num)
  }
  
  const clear = () => {
    setInput('')
  }

  const backspace = () => {
    setInput(input.slice(0, -1))
  }

  const send = () => {
    dispatchSetWords(input)
  }

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
    <div className="numpad-container">
      <div style={{display: 'flex'}}>
        <input className="input" placeholder="Type or use the numpad" style={{flex: 1}} onChange={e => onChange(e.target.value)} value={input} onKeyDown={handleKeyDown}/>
        <button className="button button-inverted" onClick={send} style={{width: '80px', }}>Send</button>
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
  );
}

export default Numpad;
