import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink, Link, Redirect} from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, 
      email: "",
      password: "",
      display_name: "",
      age: "",
      gender: ""
      

    };
    
    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    
  }
    
  handleSignup(e) {
      e.preventDefault();
      const {email, password, display_name, age, gender } = this.state;
      this.props.action({email, password, display_name, age, gender });
  }

  handleLogin(e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.action({email, password});
    this._next()
    
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

  

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
}

componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
}

handleClickOutside(event) {
    const domNode = ReactDOM.findDOMNode(this);
    
    if (!domNode || !domNode.contains(event.target)) {
      
        this.props.changeShow()
    }
}

  

  render() {
    const {step} = this.state;
    const {email, password, display_name, age, gender } = this.state;
    const values = {email, password, display_name, age, gender };
    
    if (this.props.formType === "signup") {
    switch(step) {
      case 1: 
        
      return (
        <div className="signup-form-group">
            <input
              className="signup-email-input" 
              placeholder="Your email address"
              type="text"
              onChange={this.update('email')}
              value={values.email}   
            />

        <button className="signup-form-button" type="button" onClick={ this._next }> Continue </button>
        </div>
    )
      case 2: 
      return (
        
        <div className="signup-form-group">
          <form>
        <h1 className="createYourAccountHeader">Create your AudioCloud account</h1>
        <p className="signup-password-req">Choose a password</p>
        <input
          className="signup-password-input"
          autoComplete="password"
          type="password"
          value={values.password}
          onChange={this.update('password')}
        />

        <p className="accept-cookies"> By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>

        <button className="signup-form-button" type="button" onClick={ this._next }> Accept & continue </button>
        </form>
        </div>
        )
      case 3: 
      return (
        <div className="signup-form-group">
        <h1 className="createYourAccountHeader">Create your AudioCloud account</h1>
        <p className="signup-age-req">Tell us your age</p>
        <input
          className="signup-age-input"
          type="number"
          value={values.age}
          onChange={this.update('age')}
        />

        <p className="signup-gender-req">Gender</p>
        <select className="signup-gender-select" onChange={ this.update('gender') } defaultValue='' >
            <option disabled value="">Indicate your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
        </select>

        <button className="signup-form-button" type="button" onClick={ this._next }> Continue </button>
        </div>
        )
      case 4: 
      return (
        <div className="signup-form-group">
        <h1 className="tellUsAboutYourselfHeader">Tell us a bit about yourself</h1>
        <p className="signup-displayName-req">Choose your display name</p>
        <input
          className="signup-displayName-input"
          type="text"
          value={values.display_name}
          onChange={this.update('display_name')}
        />

        <p className="display-name"> Your display name can be anything you like. Your name or artist name are good choices.</p>
        <NavLink to="/discover">
         <button className="signup-form-button" onClick={ this.handleSignup }> Get started </button>
        </NavLink>
        </div>
        )
      }
    } else if (this.props.formType === "login") {
      switch(step) {
        case 1: 
          
        return (
          <div className="signup-form-group">
              <input
                className="signup-email-input" 
                placeholder="Your email address"
                type="text"
                onChange={this.update('email')}
                value={values.email}   
              />
  
          <button className="signup-form-button" type="button" onClick={ this._next }> Continue </button>
          </div>
        )
        case 2:
    
        return (
          <div className="signup-form-group">
            <input
              className="signup-password-input"
              autoComplete="password"
              type="password"
              value={values.password}
              onChange={this.update('password')} 
            />
            
                        
              <button className="signup-form-button" onClick={ this.handleLogin }> Sign in </button>
              
          </div>

        )
        case 3:
          
          if (Object.keys(this.props.users).length > 0) {
            return (
               <Redirect to="/discover" />
            )} else {
          return (
            <div className="signup-form-group">
            <input
              className="signup-password-input"
              autoComplete="password"
              type="password"
              value={values.password}
              onChange={this.update('password')} 
            />
            
                        
              <button className="signup-form-button" onClick={ this.handleLogin }> Sign in </button>
              
          </div>
        )}
      }
    }
  }
}

export default SignupForm;