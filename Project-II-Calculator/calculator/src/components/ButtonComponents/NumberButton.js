import React from 'react';
import './Button.css';
import styled from 'styled-components'

const StyledButton = styled.button
`
background-color: white;
font-weight: bold;
height: 100px;
width: 100px;
border: 1px solid gray;
font-size: 40px;

&:hover{
    border: 1px solid blue;
}

`;
const NumberButton = (props) => {
    return (      
         
            <StyledButton>{props.input}</StyledButton>
         
                );
};


export default NumberButton;