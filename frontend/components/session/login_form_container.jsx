import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions.js'
import SignupForm from './signup_form.jsx'


const mapSTP = state => ({
    
    formType: 'login'

})

const mapDTP = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(SignupForm);
