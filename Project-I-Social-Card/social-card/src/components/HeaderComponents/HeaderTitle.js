import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (      
         <div className="headerTitle">
            <h3>Lambda School</h3>
            <p className="items">@LambdaSchool</p>
            <p className="items">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
                );
};

export default HeaderTitle;