import React from 'react';
import './Button.css';
import styled from 'styled-components'

const LargeButton = styled.button`

background-color: white;
font-weight: bold;
height: 100px;
width:300px;
border: 1px solid gray;
font-size: 40px;

&:hover{
    border: 1px solid blue;
}
`;


const BigButton = (props) => {
    return (      
         <LargeButton>{props.input}</LargeButton>
    
            );
};


export default BigButton