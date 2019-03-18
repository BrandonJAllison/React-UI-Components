import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainter = () => {
    return <div className="headerContainer">
     
     <ImageThumbnail />
        <div className= "header">
            
            <HeaderTitle />
            <HeaderContent />
        </div>
        
        
    </div>
    
}
export default HeaderContainter;
