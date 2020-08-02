import {connect} from 'react-redux';
import React from 'react';
import MusicPlayer from './music_player.jsx'
import {receiveCurrentSong} from '../../actions/session_actions'
import {getSongs} from '../../actions/song_actions'

const mapSTP = state => ({
    state: state
})

const mapDTP = dispatch => ({
    // getSong: (song) => dispatch(receiveCurrentSong(song)),
    getSongs: () => dispatch(getSongs())
})

export default connect(mapSTP, mapDTP)(MusicPlayer);