import React from 'react';

export default class Step3 extends React.Component {
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
    }
}