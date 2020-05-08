import React from 'react';

export default class Step2 extends React.Component {
    constructor(props) {
         super(props);
   
    this.saveAndContinue = this.saveAndContinue.bind(this)
    }

    

    saveAndContinue(e) {
        e.preventDefault();
        this.props.next();
    }



    render() {
        const { values } = this.props;

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
    }
}


