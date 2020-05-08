import React from 'react';

export default class Step4 extends React.Component {
    constructor(props) {
         super(props);
  
         }

 

    saveAndContinue(e) {
        e.preventDefault();
        this.props.next();
    }


    render() {
        const { values } = this.props;

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
}