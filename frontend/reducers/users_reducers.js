import { RECEIVE_CURRENT_USER } from "../actions/session_actions.js";
import { RECEIVE_USER } from "../actions/user_actions.js";
import { RECEIVE_USERS } from "../actions/user_actions.js";
import { RECEIVE_PROFILE_USER } from "../actions/user_actions.js";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      return Object.assign({}, state, { all_users: action.users });
    case RECEIVE_PROFILE_USER:
      return Object.assign({}, state, { profile_user: action.user });
    default:
      return state;
  }
};

export default usersReducer;
