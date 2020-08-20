import * as UserAPIUtil from "../util/user_apil_util.jsx";

export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});


export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
 
)

export const fetchUserInfo = display_name => dispatch => (
  UserAPIUtil.fetchUserInfo(display_name)
    .then(user => dispatch(receiveUser(user)))
 
)
