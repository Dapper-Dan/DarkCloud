import * as UserAPIUtil from "../util/user_apil_util.jsx";
import { receiveSongs } from "./song_actions.js";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_PROFILE_USER = "RECEIVE_PROFILE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveProfileUser = user => ({
  type: RECEIVE_PROFILE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});


export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
 
)



export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
 
)

export const fetchUserInfo = display_name => dispatch => (
  UserAPIUtil.fetchUserInfo(display_name)
    .then(user => dispatch(receiveProfileUser(user)))
 
)


export const editCurrentUser = (data) => dispatch => (
  UserAPIUtil.editCurrentUser(data)
    .then(user => {
      dispatch(receiveProfileUser(user))
      dispatch(receiveSongs(user.songs))
    })
)
