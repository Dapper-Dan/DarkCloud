import {connect} from 'react-redux';
import React from 'react';
// import MusicPlayer from './music_player.jsx'
// import {receiveCurrentSong, RECEIVE_CURRENT_USER} from '../../actions/session_actions'
import {getSongs} from '../../actions/song_actions'
import Profile from './profile'
import {fetchUserInfo} from '../../actions/user_actions'
import {fetchUser} from '../../actions/user_actions'
import {editCurrentUser} from '../../actions/user_actions'



const mapSTP = state => ({
    state: state,
    songs: state.entities.songs.songs,
    currentUser: state.entities.users.user
})

const mapDTP = dispatch => ({
    getSongs: (display_name) => dispatch(getSongs(display_name)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchUserInfo: (display_name) => dispatch(fetchUserInfo(display_name)),
    editUser: (user) => dispatch(editCurrentUser(user)),
    
})

export default connect(mapSTP, mapDTP)(Profile);