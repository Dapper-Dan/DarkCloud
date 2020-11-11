import {connect} from 'react-redux';
import {getSongs} from '../../actions/song_actions'
import Profile from './profile'
import {fetchUserInfo, fetchUser, editCurrentUser} from '../../actions/user_actions'

const mapSTP = state => ({
    state: state,
    songs: state.entities.songs.songs,
    currentUser: state.entities.users.user,
    profileUser: state.entities.users.profile_user,
    sessionUser: state.session.currentUser
})

const mapDTP = dispatch => ({
    getSongs: (display_name) => dispatch(getSongs(display_name)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchUserInfo: (display_name) => dispatch(fetchUserInfo(display_name)),
    editUser: (user) => dispatch(editCurrentUser(user)),
})

export default connect(mapSTP, mapDTP)(Profile);