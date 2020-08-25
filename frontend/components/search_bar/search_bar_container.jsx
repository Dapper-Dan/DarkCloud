import { connect } from "react-redux";
import SearchBar from './search_bar'
import {getBunchSongs} from '../../actions/song_actions'
import {fetchUsers} from '../../actions/user_actions'


const mSTP = state => ({
  state: state,
  songs: state.entities.songs.all_songs,
  users: state.entities.users.all_users,
  options: {all_users: state.entities.users.all_users,
    all_songs: state.entities.songs.all_songs
  }
});

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  getBunchSongs: () => dispatch(getBunchSongs())
});

export default connect(mSTP, mDTP)(SearchBar);
