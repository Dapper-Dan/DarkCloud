import { connect } from "react-redux";
import { createSong } from "../../actions/song_actions";
import SongForm from "./song_form";
import {fetchUser} from '../../actions/user_actions';

const mSTP = state => ({
  currentUser: state.session.currentUser,
  state: state
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song)),
  getUser: (user) => dispatch(fetchUser(user))
});

export default connect(mSTP, mDTP)(SongForm);
