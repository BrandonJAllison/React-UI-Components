import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import styled from 'styled-components'



const App = () => {
  return (
    <div>
      <CalculatorDisplay input = "0" />
      
      <ActionButton input ="CLEAR" />
      <ActionButton input ="%" />
      <div>
      <NumberButton input = '7'/>
      <NumberButton input = '8'/>
      <NumberButton input = '9'/>
      <ActionButton input ="X" />
      </div>
      <div>
      <NumberButton input = '4'/>
      <NumberButton input = '5'/>
      <NumberButton input = '6'/>
      <ActionButton input ="-" />
      </div>
      <div>
      <NumberButton input = '1'/>
      <NumberButton input = '2'/>
      <NumberButton input = '3'/>
      <ActionButton input ="+" />
      </div>
      <NumberButton input = '0'/>
      <ActionButton input ="=" />
    </div>
  );
};

export default App;
