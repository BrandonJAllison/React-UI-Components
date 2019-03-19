import React from 'react';
import './Button.css';
import styled from 'styled-components'

const StyledButton = styled.button
`
background-color: white;
height: 50px;
width: 50px;
border: 1px solid gray;
font-size: 20px;


`;
const NumberButton = (props) => {
    return (      
         
            <StyledButton>{props.input}</StyledButton>
         
                );
};


export default NumberButton;