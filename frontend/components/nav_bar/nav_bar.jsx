import React from 'react';
import SignupFormContainer from '../session/signup_form_container.jsx';
import { NavLink } from 'react-router-dom';



export default class NavBar extends React.Component {


    render() {
        
        switch(this.props.navType) {
            case 'default':

            return (
                
                <div className="nav_bar">
                
            <div className="nav_buttons_container" >
                <nav className="left_nav">
                <img src={window.greenLogo} width="184px" className="nav-logo"/>
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


                       
                            <button className="upload-button"> Upload </button>
                        
                        
                </nav>
            </div>

                
                    
                </div>
            )


            case 'song':
            return (
                <div className="song_nav_bar">
                    <a className="all-songs-button"> All </a>
                    <a className="popular-songs-button"> Popular </a>
                    <a className="albums-button"> Albums </a>
                </div>
            )
        }
         
    }

}

