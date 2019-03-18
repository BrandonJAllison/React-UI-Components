import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    
    constructor(props) {
    	super(props);
    	this.state = {clicks: 0}
    }
    
    handleClick() {
    	this.setState((prevState) => ({
             clicks: prevState.clicks + 1
        }));
    }
    
    render() {
        return (<div className ="footerDiv">
        <i className="far fa-comment"></i>
        <i className="fas fa-sync-alt"></i>
        <i onClick={this.handleClick.bind(this)} className="far fa-heart">{this.state.clicks} </i>
        <i className="far fa-envelope"></i>
    </div>)
    }
    
}



export default Footer;