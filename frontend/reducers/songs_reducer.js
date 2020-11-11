import { RECEIVE_SONGS, RECEIVE_SONG, RECEIVE_BUNCH_SONGS, RECEIVE_NEW_SONG } from "../actions/song_actions";

const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
    case RECEIVE_SONGS:
        return Object.assign({}, state, { songs: action.songs });
    case RECEIVE_BUNCH_SONGS:
        return Object.assign({}, state, { all_songs: action.songs });
    case RECEIVE_SONG:
        return Object.assign({}, state, { currentSong: action.song });
    case RECEIVE_NEW_SONG:
        return Object.assign({}, state, { newSong: action.song });
    default:
        return state;
    }
}

export default songsReducer;