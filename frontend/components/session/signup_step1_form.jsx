import React from 'react';

export default class Step1 extends React.Component {
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
    }
}

