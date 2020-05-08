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
        return <Step1 next={ this._next } update={ this.update } values={values} />
      case 2: 
        return <Step2 next={ this._next } update={ this.update } values={values} />
      case 3: 
        return <Step3 next={ this._next } update={ this.update } values={values} />
      case 4: 
        return <Step4 handleSignup={ this.handleSignup } update={ this.update } values={values} />
      }
        
    
  }
}

export default SignupForm;