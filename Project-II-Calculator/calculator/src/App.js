import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import BigButton from './components/ButtonComponents/BigButton.js'

import styled from 'styled-components'

const AppDiv = styled.div`
border: 1px solid gray;
width: 400px;
box-shadow: 0 8px 6px -6px black; 
`;

const BtnRow = styled.div`
width: 100%;
`;
const StyledContainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
align-content: center;
width: 100%;

`;

const App = () => {
  return (
    <StyledContainer>
    <AppDiv>
      <CalculatorDisplay input = "0" />
      <BtnRow>
      <BigButton className="clear"   input ="CLEAR" />
      <ActionButton input ="%" />
      </BtnRow>
      <BtnRow>
      <NumberButton input = '7'/>
      <NumberButton input = '8'/>
      <NumberButton input = '9'/>
      <ActionButton input ="X" />
      </BtnRow>
      <BtnRow>
      <NumberButton input = '4'/>
      <NumberButton input = '5'/>
      <NumberButton input = '6'/>
      <ActionButton input ="-" />
      </BtnRow>
      <BtnRow>
      <NumberButton input = '1'/>
      <NumberButton input = '2'/>
      <NumberButton input = '3'/>
      <ActionButton input ="+" />
      </BtnRow>
      <BigButton     input = '0'/>
      <ActionButton  input ="=" />
    </AppDiv>
    </StyledContainer>
  );
};

export default App;
