import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";
import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_PROFILE_USER } from "../actions/user_actions.js";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.user });
    case RECEIVE_USER:
      return Object.assign({}, state, { user: action.user });
    case RECEIVE_USERS:
      return Object.assign({}, state, { all_users: action.users });
    case RECEIVE_PROFILE_USER:
      return Object.assign({}, state, { profile_user: action.user });
    default:
      return state;
  }
};

export default usersReducer;
