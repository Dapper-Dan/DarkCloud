import React from 'react';
// import SignupFormContainer from '../session/signup_form_container.jsx';
import { NavLink } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: false,
            registerForm: false,
            showModal: false
        };

        this.loginModelShow = this.loginModelShow.bind(this);
        this.registerModelShow = this.registerModelShow.bind(this);
        this.changeShow = this.changeShow.bind(this)
    }

    changeShow() {
        this.setState({
            loginForm: false,
            registerForm: false,
            showModal: false
        });
    }

    loginModelShow() {
        this.setState( {
            loginForm : true,
            showModal: true                   
        })
    }
    
    registerModelShow() {
        this.setState( {
            registerForm : true,
            showModal: true                   
        })
    }


    render() {
        let showModal = (
            <div className="modal-background">
                <div className="signModal">
                    { this.state.loginForm ?  <LoginFormContainer changeShow={this.changeShow} /> : '' }
                    { this.state.registerForm ?  <SignupFormContainer changeShow={this.changeShow} /> : '' }
                </div>
            </div>
        )
        
        let noModal = ""
        
        let sessionModal
        
        this.state.showModal ? (sessionModal = showModal) : (sessionModal = noModal);
        
        switch(this.props.navType) {
            case 'default':

            return (
                
                <div className="nav_bar">
                    {sessionModal}
                
                    <div className="nav_buttons_container" >

                        <nav className="left_nav">
                            <img src={window.greenLogo} width="184px" className="nav-logo"/>
                            <NavLink to="/" className="home-button" style={{ textDecoration: 'none' }}>   
                                Home
                            </NavLink>
                            <a className="library-button"> Library </a>
                        </nav>

                        <nav className="right_nav">
                            <button className="login-modal-button" onClick={ this.loginModelShow }> Sign in </button>
                            <button className="signup-modal-button" onClick={ this.registerModelShow }> Create account</button>
                            <button className="upload-button"> Upload </button>
                        </nav>

                    </div>

                </div>
            )


            case 'song':
            return (
                <div className="song_nav_bar">
                    {/* <a className="all-songs-button"> All </a> */}
                    {/* <a className="popular-songs-button"> Popular </a>
                    <a className="albums-button"> Albums </a> */}
                </div>
            )
        }
         
    }

}

