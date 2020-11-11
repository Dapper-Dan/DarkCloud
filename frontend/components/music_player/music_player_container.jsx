import {connect} from 'react-redux';
import MusicPlayer from './music_player.jsx';
import {getSongs, getBunchSongs, getSong, like, unlike} from '../../actions/song_actions';

const mapSTP = state => ({
    state: state,
    currentSong: state.session.currentSong,
    currentUser: state.session.currentUser
})

const mapDTP = dispatch => ({
    getSong: (songId) => dispatch(getSong(songId)),
    like: (data) => dispatch(like(data)),
    unlike: (data) => dispatch(unlike(data)),
    getSongs: (display_name) => dispatch(getSongs(display_name)),
    getBunchSongs: () => dispatch(getBunchSongs())
})

export default connect(mapSTP, mapDTP)(MusicPlayer);