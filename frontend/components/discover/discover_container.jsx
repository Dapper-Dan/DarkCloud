import { connect } from "react-redux";
import Discover from './discover.jsx'
import {getBunchSongs} from '../../actions/song_actions'



const mSTP = state => ({
  currentUser: state.session.currentUser,
  songs: state.entities.songs.all_songs,
  state: state
 
});

const mDTP = (dispatch) => ({
  getBunchSongs: () => dispatch(getBunchSongs())
});

export default connect(mSTP, mDTP)(Discover);
