import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';


class SongForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: ""
      }


      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name} = this.state;
        this.props.action({name});
    }






    render(){
        const {name} = this.state
        const values = {name};
      return (
          <div className="songForm">
              <input 
                className="nameInput"
                placeholder="Enter track name"
                type="text"
                onChange={this.update('name')}
                value={values.name} 
              />

              <button className="songFormButton" onClick={this.handleSubmit}>  Submit Song </button>

          </div>

      )
    }
}

export default SongForm;