import { RECEIVE_SONGS, RECEIVE_SONG, RECEIVE_BUNCH_SONGS, RECEIVE_NEW_SONG } from "../actions/song_actions"

const songsReducer = (state = {}, action) => {
    Object.freeze(state)

    // let nextState = Object.assign({}, state)

    // switch (action.type) {
    //     case RECEIVE_SONGS:
    //         nextState = action.songs
    //     case RECEIVE_BUNCH_SONGS: 
    //         nextState['all_songs'] = action.songs   
    //         return nextState;
    //     case RECEIVE_SONG:
    //         nextState[action.song.id] = action.song
    //         return nextState;
    //     // case REMOVE_SONG:
    //     //     delete nextState[action.songId]
    //     //     return nextState;
    //     // case REMOVE_SONGS:
    //     //     return {};
    //     default:
    //         return state;
    // }

    switch (action.type) {
    case RECEIVE_SONGS:
        return Object.assign({}, state, { songs: action.songs });
    case RECEIVE_BUNCH_SONGS:
        return Object.assign({}, state, { all_songs: action.songs });
    case RECEIVE_SONG:
        return Object.assign({}, state, { currentSong: action.song });
    case RECEIVE_NEW_SONG:
        return Object.assign({}, state, { newSong: action.song });
    // case REMOVE_SONG:
    //     delete nextState[action.songId]
    //     return nextState;
    // case REMOVE_SONGS:
    //     return {};
    default:
        return state;
    }

}

export default songsReducer;