import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink, Link, Redirect} from 'react-router-dom'
// import cover_def from '../../../app/assets/images/gradient_right.png'
// import profile_def from '../../../app/assets/images/gradientLeft.png'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, 
      email: "",
      password: "",
      display_name: "",
      age: "",
      gender: "",
      cover_photo: "",
      profile_photo: "",
      location: ""
      

    };
    
    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    
  }
    
  handleSignup(e) {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('user[email]', this.state.email);
      formData.append('user[password]', this.state.password);
      formData.append('user[display_name]', this.state.display_name);
      formData.append('user[age]', this.state.age);
      formData.append('user[gender]', this.state.gender);
      // formData.append('user[location]', this.state.location);
      // formData.append('user[profile_photo]',  window.profile);
      // formData.append('user[cover_photo]', this.state.cover_photo);
      this.props.action(formData)

      
      setTimeout(() => {
        if (this.props.currentUser) this.props.changeShow()
      }, 300)
  }



  handleLogin(e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.action({email, password});
    setTimeout(() => {
      if (this.props.currentUser) this.props.changeShow()
    }, 300)
    
    if (this.state.step !== 3) this._next()
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
    console.log(window.profile)
    console.log(this.props.currentUser)
    const {step} = this.state;
    const {email, password, display_name, age, gender } = this.state;
    const values = {email, password, display_name, age, gender };
    
    if (this.props.formType === "signup") {
    switch(step) {
      case 1: 
        
      return (
   
        <div className="signup-form-group">
          <p id="emailInput">Please enter your email address to sign up</p>
            <input
              className="signup-email-input" 
              placeholder="Your email address"
              type="text"
              onChange={this.update('email')}
              value={values.email}   
            />

          <button className="signup-form-button" type="button" onClick={ this._next }> Continue </button>
          <p id="thanks">Thanks for using my site! The information you provide will not be used for anything! There will be no ads, no email notifications, and no nonsense. </p>
        </div>
       
    )
      case 2: 
      return (
        
        <div className="signup-form-group">
        
        <h1 id="createYourAccountHeader">Create your AudioCloud account</h1>
        <p id="signup-password">Choose a password</p>
        <form id="signup-password-form">
          <input
            className="signup-password-input"
            autoComplete="password"
            type="password"
            value={values.password}
            onChange={this.update('password')}
            placeholder="Your password"
          />
        </form>

        <p id="accept-cookies"> By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>

        <button className="signup-form-button" type="button" onClick={ this._next }> Accept & continue </button>
        
        </div>
        )
      case 3: 
      return (
        <div className="signup-form-group">
        <h1 id="createYourAccountHeader">Create your AudioCloud account</h1>
        <p id="signup-age">Tell us your age</p>
        <input
          className="signup-age-input"
          type="number"
          value={values.age}
          onChange={this.update('age')}
        />

        <p id="signup-gender">Gender</p>
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
        <h1 id="tellUsAboutYourselfHeader">Tell us a bit about yourself</h1>
        <p id="signup-displayName">Choose your display name</p>
        <input
          className="signup-displayName-input"
          type="text"
          value={values.display_name}
          onChange={this.update('display_name')}
        />

        <p id="signup-display"> Your display name can be anything you like. Your name or artist name are good choices.</p>
        <NavLink id="signup-navLink" to="/discover">
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
            <p id="login-email">Please enter your email to login</p>
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
            <p id="login-password">Please enter your password</p>
            <form id="login-password-form">
            <input
              className="signup-password-input"
              autoComplete="password"
              type="password"
              value={values.password}
              onChange={this.update('password')} 
              placeholder="Your password"
            />
            </form>
                        
              <button className="signup-form-button" onClick={ this.handleLogin }> Sign in </button>
              
          </div>

        )
        case 3:
          
          if (this.props.currentUser) {
            return (
               <Redirect to="/discover" />
            )} else {
          return (
            <div className="signup-form-group">
            <p id="login-password">Please enter your password</p>
            <form id="login-password-form">
            <input
              className="signup-password-input"
              autoComplete="password"
              type="password"
              value={values.password}
              onChange={this.update('password')} 
              placeholder="Your password"
            />
            </form>
            
                        
              <button className="signup-form-button" onClick={ this.handleLogin }> Sign in </button>
              
          </div>
        )}
      }
    }
  }
}

export default SignupForm;