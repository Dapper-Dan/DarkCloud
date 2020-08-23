import {connect} from 'react-redux';
import React from 'react';
// import MusicPlayer from './music_player.jsx'
import {receiveCurrentSong} from '../../actions/session_actions'
import {getSongs} from '../../actions/song_actions'
import Profile from './profile'
import {fetchUserInfo} from '../../actions/user_actions'

const mapSTP = state => ({
    state: state,
    songs: state.entities.songs
})

const mapDTP = dispatch => ({
    getSongs: (display_name) => dispatch(getSongs(display_name)),
    fetchUserInfo: (display_name) => dispatch(fetchUserInfo(display_name)),
})

export default connect(mapSTP, mapDTP)(Profile);