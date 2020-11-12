import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions.js'
import SignupForm from './signup_form.jsx'
import {login} from '../../actions/session_actions.js'

const mapSTP = state => ({
    formType: 'signup',
    currentUser: state.session.currentUser,
    errors: state.errors.session
})

const mapDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(SignupForm);
