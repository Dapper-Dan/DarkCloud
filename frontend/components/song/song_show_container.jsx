import { connect } from "react-redux";
import SongShow from "./song_show";

const mSTP = state => ({
  state: state
});

const mDTP = (dispatch) => ({
  getSong: (songId) => dispatch(getSong(songId))
});

export default connect(mSTP, mDTP)(SongShow);
