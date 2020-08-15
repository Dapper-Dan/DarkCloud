import {connect} from 'react-redux';
import React from 'react';
// import MusicPlayer from './music_player.jsx'
import {receiveCurrentSong} from '../../actions/session_actions'
import {getSongs} from '../../actions/song_actions'
import Profile from './profile'

const mapSTP = state => ({
    state: state
})

const mapDTP = dispatch => ({
    getSongs: (display_name) => dispatch(getSongs(display_name))
})

export default connect(mapSTP, mapDTP)(Profile);