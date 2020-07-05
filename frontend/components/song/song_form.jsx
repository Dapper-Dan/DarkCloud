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
          title: "",
          display_name: ""
          
      }
      this.props.getUser()


      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({display_name: this.props.user.display_name})
        const {title, display_name} = this.state;
        this.props.action({title, display_name});
    }






    render(){
        const {title} = this.state
        const values = {title};
      return (
          <div className="songForm">
              <input 
                className="nameInput"
                placeholder="Enter track title"
                type="text"
                onChange={this.update('title')}
                value={values.title} 
              />

              <button className="songFormButton" onClick={this.handleSubmit}>  Submit Song </button>

          </div>

      )
    }
}

export default SongForm;