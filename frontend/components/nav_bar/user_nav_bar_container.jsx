import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import NavBar from './nav_bar'
import {fetchUser} from '../../actions/user_actions'

const mSTP = state => ({
  currentUser: state.entities.users.user,
  navType: 'user',
  state: state
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(mSTP, mDTP)(NavBar);
