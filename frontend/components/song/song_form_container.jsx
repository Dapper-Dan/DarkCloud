import { connect } from "react-redux";
import { createSong } from "../../actions/song_actions";
import SongForm from "./song_form";


const mSTP = state => ({
  state: state
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song))
});

export default connect(mSTP, mDTP)(SongForm);
