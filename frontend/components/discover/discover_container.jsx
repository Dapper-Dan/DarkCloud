import { connect } from "react-redux";
import Discover from './discover.jsx'



const mSTP = state => ({
  user: state.session.currentUser,
  navType: 'default'
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song))
});

export default connect(mSTP, mDTP)(Discover);
