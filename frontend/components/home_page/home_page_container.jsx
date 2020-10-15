import { connect } from "react-redux";
import NavBar from './nav_bar'
import {login} from '../../actions/session_actions.js'
import {signup} from '../../actions/session_actions.js'
import HomePage from "./home_page";


const mSTP = state => ({
  currentUser: state.session.currentUser,
  
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song))
});

export default connect(mSTP, mDTP)(HomePage);
