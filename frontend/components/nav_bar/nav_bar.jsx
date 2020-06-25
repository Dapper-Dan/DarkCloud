import React from 'react';
import SignupFormContainer from '../session/signup_form_container.jsx';
import { NavLink } from 'react-router-dom';



export default class NavBar extends React.Component {


    render() {
       
        return (
            
            <div className="nav_bar">
               
               <img src={window.logoURL} width="105px" />
               
               <nav className="left_nav">
                   <a className="home-button"> Home </a>

                   <a className="library-button"> Library </a>
               </nav>

               <nav className="right_nav">

                   
                    {/* <NavLink to="/register"> */}
                    <button className="login-modal-button"> Sign in </button>
                    {/* </NavLink> */}

                    <NavLink to="/register">
                        <button className="signup-modal-button"> Create account</button>
                    </NavLink>

                    
               </nav>

               
                
            </div>
        )
        
        
    }

}

