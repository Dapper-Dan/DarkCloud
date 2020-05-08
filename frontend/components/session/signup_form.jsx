import React from 'react';
import Step1 from './signup_step1_form.jsx';
import Step2 from './signup_step2_form.jsx';
import Step3 from './signup_step3_form.jsx';
import Step4 from './signup_step4_form.jsx';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1, 
      email: "",
      password: "",
      display_name: "",
      age: "",
      gender: ""

    };

    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }
    
  handleSignup(e) {
      e.preventDefault();
      this.props.action(this.state);
  }

  update(value) {
      return e => this.setState({ [value]: e.target.value });
  }
  
  _next() {
    let currentStep = this.state.currentStep;   //delete if goes wrong
    if (currentStep !== 4) currentStep += 1;
    this.setState({ currentStep: currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) currentStep -= 1;
    this.setState({ currentStep: currentStep });
  }

  render() {
      if (this.state.currentStep === 1) {
        return <Step1 next={ this._next } update={ this.update } />
      } else if (this.state.currentStep === 2) {
        return <Step2 email={ this.state.email } next={ this._next } update={ this.update }/>
      } else if (this.state.currentStep === 3) {
        return <Step3 email={ this.state.email } next={ this._next } password={ this.state.password} update={ this.update } />
      } else if (this.state.currentStep === 4) {
        return <Step4 email={ this.state.email } password={ this.state.password} handleSignup={ this.handleSignup } age={ this.state.age} gender={ this.state.gender} update={ this.update }/>
      }
        
    
  }
}

export default SignupForm;