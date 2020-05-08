import React from 'react';
import SignupFormContainer from '../session/signup_form_container.jsx';



export default class NavBar extends React.Component {


    render() {
       
        return (
            
            <div className="nav_bar">
               
               <img src={window.logoURL} width="105px" />
               
                
                <button className="signup-modal-button" onClick={ this.renderComp }> Create account</button>
                
            </div>
        )
        
        
    }

}

