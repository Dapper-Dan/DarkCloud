import { connect } from "react-redux";
import { getSong } from "../../actions/song_actions";
import SongPart from "./song_part";


const mSTP = state => ({
  songs: state.entities.songs.songs
});

const mDTP = (dispatch) => ({
  getSong: (songId) => dispatch(getSong(songId))
});

export default connect(mSTP, mDTP)(SongPart);
