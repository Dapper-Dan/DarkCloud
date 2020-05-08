import React from 'react';

export default class Step4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: this.props.password,
            age: this.props.age,
            gender: this.props.gender,
            display_name: ""
        }

        this.handleSignup = this.handleSignup.bind(this);
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    handleSignup(e) {
        e.preventDefault();
        this.props.action(this.state);
    }



    render() {
        return (
        <div className="signup-form-group">
        <h1 className="tellUsAboutYourselfHeader">Tell us a bit about yourself</h1>
        <p className="signup-displayName-req">Choose your display name</p>
        <input
          className="signup-displayName-input"
          type="text"
          value={this.state.display_name}
          onChange={this.update('display_name')}
        />

        <p className="display-name"> Your display name can be anything you like. Your name or artist name are good choices.</p>

        <button className="signup-form-button" onClick={ this.props.handleSignup }> Get started </button>
        </div>
        )
    }
}