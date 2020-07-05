import { connect } from "react-redux";
import { createSong } from "../../actions/song_actions";
import SongForm from "./song_form";
import {login} from '../../actions/session_actions.js'


const mSTP = state => ({
  user: state.session.user
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song)),
  getUser: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SongForm);
