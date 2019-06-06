import React from 'react';
import './Display.css';
import styled from 'styled-components'

const StyledDiv = styled.div`
height: 100px;
background-color: black;
width: 400px;
font-size: 80px;
color: white;
display:flex;
justify-content: flex-end;
align-items: center;

`

const CalculatorDisplay = (props) => {
    return (      
         <StyledDiv className="calculatorDisplay">{props.input}</StyledDiv>
            );
};



export default CalculatorDisplay