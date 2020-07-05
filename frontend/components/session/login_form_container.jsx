import {connect} from 'react-redux';
import React from 'react';
import {login} from '../../actions/session_actions.js'
import SignupForm from './signup_form.jsx'


const mapSTP = state => ({
    
    formType: 'login',
    users: state.entities.users

})

const mapDTP = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(SignupForm);
