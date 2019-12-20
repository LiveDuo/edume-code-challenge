import React from 'react';
import './App.scss';

import Title from './components/Title/Title'
import Output from './components/Output/Output'
import Numpad from './components/Numpad/Numpad'

const App = () => {

  return (
    <div>
      <Title/>
      <Numpad/>
      <Output/>
    </div>
  );
}

export default App;
