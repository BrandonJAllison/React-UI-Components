import React from 'react';
import './Display.css';
import styled from 'styled-components'

const StyledDiv = styled.div`
height: 40px;
background-color: black;
width: 200px;
font-size: 30px;
color: white;
text-align: right;
`

const CalculatorDisplay = (props) => {
    return (      
         <StyledDiv className="calculatorDisplay">{props.input}</StyledDiv>
                );
};



export default CalculatorDisplay