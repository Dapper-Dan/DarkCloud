import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_CURRENT_SONG } from "../actions/session_actions.js";


const _nullSession = {
  id: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { user: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, state, { song: action.song });
    default:
      return state;
  }
};

export default sessionReducer;