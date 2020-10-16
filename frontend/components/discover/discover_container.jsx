import { connect } from "react-redux";
import Discover from './discover.jsx'
import {getBunchSongs} from '../../actions/song_actions'
import {fetchUsers} from '../../actions/user_actions'



const mSTP = state => ({
  currentUser: state.session.currentUser,
  songs: state.entities.songs.all_songs,
  state: state,
  users: state.entities.users.all_users
 
});

const mDTP = (dispatch) => ({
  getBunchSongs: () => dispatch(getBunchSongs()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(Discover);
