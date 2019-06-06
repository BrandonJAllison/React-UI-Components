import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';


const CardContainer = () => {
    return <div onClick = {leave} className = 'container'>
        <CardBanner />
        <CardContent />
    </div> 
}

function leave() {
    window.location.href = 'https://www.reactjs.org';
}

export default CardContainer; 
