import { connect } from "react-redux";
import Library from './library.jsx'
import {getSongs} from '../../actions/song_actions'
import {fetchUsers} from '../../actions/user_actions'
import {fetchUserInfo} from '../../actions/user_actions'
import {fetchUser} from '../../actions/user_actions'



const mSTP = state => ({
  currentUser: state.session.currentUser,
  songs: state.entities.songs.all_songs,
  state: state,
  users: state.entities.users
 
});

const mDTP = (dispatch) => ({
  getSongs: (display_name) => dispatch(getSongs(display_name)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserInfo: (display_name) => dispatch(fetchUserInfo(display_name)),
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(mSTP, mDTP)(Library);
