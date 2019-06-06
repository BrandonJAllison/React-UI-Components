import React from 'react';
import './Button.css';
import styled from 'styled-components'

const StyledActionButton = styled.button`
color: white;
background-color: maroon;
height: 100px;
width:100px;
border: 1px solid gray;
font-size: 40px;
&:hover{
    border: 1px solid blue;
}
`;


const ActionButton = (props) => {
    return (      
         <StyledActionButton className = "actionButton" >{props.input}</StyledActionButton>
        
            );
};


export default ActionButton