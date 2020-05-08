import React from 'react';

export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "" }

        
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    

    render() {
      

      return (
          <div className="signup-form-group">
              <input
                className="signup-email-input" 
                placeholder="Your email address"
                type="text"
                value={this.state.email}   
                onChange={this.props.update('email')}
              />

          <button className="signup-form-button" onClick={ this.props.next }> Continue </button>
          </div>
      )
    }
}

