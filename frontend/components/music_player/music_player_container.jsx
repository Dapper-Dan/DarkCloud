import {connect} from 'react-redux';
import React from 'react';
import MusicPlayer from './music_player.jsx'
import {receiveCurrentSong} from '../../actions/session_actions'
import {getSongs} from '../../actions/song_actions'
import {getBunchSongs} from '../../actions/song_actions'

const mapSTP = state => ({
    state: state
})

const mapDTP = dispatch => ({
    // getSong: (song) => dispatch(receiveCurrentSong(song)),
    getBunchSongs: () => dispatch(getBunchSongs())
})

export default connect(mapSTP, mapDTP)(MusicPlayer);