import React from 'react';

export default class Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: this.props.password,
            age: "",
            gender: ""
        }
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }




    render() {
        return (
        <div className="signup-form-group">
        <h1 className="createYourAccountHeader">Create your AudioCloud account</h1>
        <p className="signup-age-req">Tell us your age</p>
        <input
          className="signup-age-input"
          type="number"
          value={this.state.age}
          onChange={this.update('age')}
        />

        <p className="signup-gender-req">Gender</p>
        <select className="signup-gender-select" onChange={ this.update('gender') }>
            <option disabled value="">Indicate your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
        </select>

        <button className="signup-form-button" onClick={ this.props.next }> Continue </button>
        </div>
        )
    }
}