import { connect } from "react-redux";
import { getSongs } from "../../actions/song_actions";
import SongList from "./song_index";
import {getBunchSongs} from "../../actions/song_actions";


const mSTP = state => ({
  songs: state.entities.songs.all_songs,
  
});



const mDTP = (dispatch) => ({
  getSongs: (display_name) => dispatch(getSongs(display_name)),
  getBunchSongs: () => dispatch(getBunchSongs())
});

export default connect(mSTP, mDTP)(SongList);
