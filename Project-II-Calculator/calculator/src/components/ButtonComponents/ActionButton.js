import React from 'react';
import './Button.css';
import styled from 'styled-components'

const StyledActionButton = styled.button`
color: white;
background-color:maroon;
height: 50px;
width:50px;
border: 1px solid gray;
font-size: 20px;
`


const ActionButton = (props) => {
    return (      
         <StyledActionButton className = "actionButton" >{props.input}</StyledActionButton>
        
            );
};


export default ActionButton