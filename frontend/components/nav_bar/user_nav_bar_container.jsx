import { connect } from "react-redux";
import NavBar from './nav_bar'


const mSTP = state => ({
  currentUser: state.session.currentUser,
  navType: 'user'
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song)),
  getUser: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(NavBar);
