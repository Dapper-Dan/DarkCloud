import {connect} from 'react-redux';
import {getSongs, getBunchSongs} from '../../actions/song_actions';
import {fetchUsers} from '../../actions/user_actions';
import SearchResults from './search_results';

const mapSTP = state => ({
    state: state,
    currentUser: state.session.currentUser,
    songs: state.entities.songs.all_songs,
    users: state.entities.users.all_users,
})

const mapDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    getBunchSongs: () => dispatch(getBunchSongs()),
    getSongs: (display_name) => dispatch(getSongs(display_name))
})

export default connect(mapSTP, mapDTP)(SearchResults);