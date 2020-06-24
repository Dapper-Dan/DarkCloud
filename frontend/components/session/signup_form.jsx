import React from 'react';
import Step1 from './signup_step1_form.jsx';
import Step2 from './signup_step2_form.jsx';
import Step3 from './signup_step3_form.jsx';
import Step4 from './signup_step4_form.jsx';

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
    
  }
    
  handleSignup(e) {
      e.preventDefault();
      const {email, password, display_name, age, gender } = this.state;
      this.props.action({email, password, display_name, age, gender });
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

  

  render() {
    const {step} = this.state;
    const {email, password, displayName, age, gender } = this.state;
    const values = {email, password, displayName, age, gender };

     
    switch(step) {
      case 1: 
        
      return (
        <div className="signup-form-group">
            <input
              className="signup-email-input" 
              placeholder="Your email address"
              type="text"
              onChange={this.props.update('email')}
              value={values.email}   
            />

        <button className="signup-form-button" onClick={ this.saveAndContinue }> Continue </button>
        </div>
    )
      case 2: 
      return (
        <div className="signup-form-group">
        <h1 className="createYourAccountHeader">Create your AudioCloud account</h1>
        <p className="signup-password-req">Choose a password</p>
        <input
          className="signup-password-input"
          type="password"
          value={values.password}
          onChange={this.props.update('password')}
        />

        <p className="accept-cookies"> By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>

        <button className="signup-form-button" onClick={ this.saveAndContinue }> Accept & continue </button>
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
          onChange={this.props.update('age')}
        />

        <p className="signup-gender-req">Gender</p>
        <select className="signup-gender-select" onChange={ this.props.update('gender') } defaultValue='' >
            <option disabled value="">Indicate your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
        </select>

        <button className="signup-form-button" onClick={ this.saveAndContinue }> Continue </button>
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
          value={values.displayName}
          onChange={this.props.update('display_name')}
        />

        <p className="display-name"> Your display name can be anything you like. Your name or artist name are good choices.</p>

        <button className="signup-form-button" onClick={ this.props.handleSignup }> Get started </button>
        </div>
        )
      }




    // switch(step) {
    //   case 1: 
    //     return <Step1 next={ this._next } update={ this.update } values={values} />
    //   case 2: 
    //     return <Step2 next={ this._next } update={ this.update } values={values} />
    //   case 3: 
    //     return <Step3 next={ this._next } update={ this.update } values={values} />
    //   case 4: 
    //     return <Step4 handleSignup={ this.handleSignup } update={ this.update } values={values} />
    //   }
        
    
  }
}

export default SignupForm;