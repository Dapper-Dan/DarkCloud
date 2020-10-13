import { connect } from "react-redux";
import { getSong } from "../../actions/song_actions";
import {like} from "../../actions/song_actions"
import {unlike} from "../../actions/song_actions"
import SongPart from "./song_part";


const mSTP = state => ({
  songs: state.entities.songs.songs,
  state: state
});

const mDTP = (dispatch) => ({
  getSong: (songId) => dispatch(getSong(songId)),
  like: (data) => dispatch(like(data)),
  unlike: (data) => dispatch(unlike(data))
});

export default connect(mSTP, mDTP)(SongPart);
