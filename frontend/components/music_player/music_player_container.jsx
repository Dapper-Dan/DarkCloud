import {connect} from 'react-redux';
import React from 'react';
import MusicPlayer from './music_player.jsx'
import {receiveCurrentSong} from '../../actions/session_actions'
import {getSongs} from '../../actions/song_actions'
import {getBunchSongs} from '../../actions/song_actions'
import {like} from "../../actions/song_actions"
import {unlike} from "../../actions/song_actions"
import { getSong } from "../../actions/song_actions";

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