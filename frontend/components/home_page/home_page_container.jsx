import { connect } from "react-redux";
import HomePage from "./home_page";

const mSTP = state => ({
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song))
});

export default connect(mSTP, mDTP)(HomePage);
