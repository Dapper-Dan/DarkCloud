import { connect } from "react-redux";
import NavBar from './nav_bar'
import {login} from '../../actions/session_actions.js'
import {signup} from '../../actions/session_actions.js'


const mSTP = state => ({
  user: state.session.user,
  navType: 'default'
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song))
});

export default connect(mSTP, mDTP)(NavBar);
