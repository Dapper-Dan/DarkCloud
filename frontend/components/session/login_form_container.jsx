import {connect} from 'react-redux';
import {login} from '../../actions/session_actions.js';
import SignupForm from './signup_form.jsx';

const mapSTP = state => ({
    formType: 'login',
    currentUser: state.session.currentUser,
    errors: state.errors.session
})

const mapDTP = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default connect(mapSTP, mapDTP)(SignupForm);
