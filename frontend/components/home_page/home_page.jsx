import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';
import ReactDOM from 'react-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loginForm: false,
        registerForm: false
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this.loginModelShow = this.loginModelShow.bind(this);
    this.registerModelShow = this.registerModelShow.bind(this);
    this.changeShow = this.changeShow.bind(this)
  }
    
  handleSignup(e) {
      e.preventDefault();
      const {email, password, display_name, age, gender } = this.state;
      this.props.action({email, password, display_name, age, gender });
  }


  loginModelShow() {
      this.setState( {loginForm : true})
  }

  registerModelShow() {
    this.setState( {registerForm : true})
}



  update(value) {
        return e => this.setState({ [value]: e.target.value });
    }
  
  _next() {
    const { step } = this.state
        this.setState({
            step : step + 1
        })
  }

  changeShow() {
    this.setState({
        loginForm: false,
        registerForm: false
    });
  }



  

  render() {
    return (
        <>
        {/* <NavBar /> */}
        <img src={window.logoURL} width="105px" />
        <div className="homePage">

      
           
           <button className="login-modal-button" onClick={ this.loginModelShow }> Sign in </button>
           

           
            <button className="signup-modal-button" onClick={ this.registerModelShow }> Create account</button>
          

           { this.state.loginForm ?  <LoginFormContainer changeShow={this.changeShow} /> : '' }
           { this.state.registerForm ?  <SignupFormContainer changeShow={this.changeShow} /> : '' }
        </div>
        </>
    )
    
  }

}


export default HomePage;