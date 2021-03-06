import * as UserAPIUtil from "../util/user_apil_util.jsx";
import { receiveSongs } from "./song_actions.js";
import {receiveCurrentUser} from "./session_actions"
import * as SongsAPIUtil from "../util/song_api_util"

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_PROFILE_USER = "RECEIVE_PROFILE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
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
    .fail(errors => dispatch(receiveUserErrors(errors.responseJSON)))
)

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
)

export const fetchUserInfo = (display_name) => dispatch => (
  UserAPIUtil.fetchUserInfo(display_name)
    .then(user => dispatch(receiveProfileUser(user)))
    .fail(errors => dispatch(receiveUserErrors(errors.responseJSON)))
)

export const editCurrentUser = (data) => dispatch => (
  UserAPIUtil.editCurrentUser(data)
    .then(user => {
      dispatch(receiveProfileUser(user))
      dispatch(receiveCurrentUser(user))
      SongsAPIUtil.getSongs(user.display_name)
      .then((songs) => dispatch(receiveSongs(songs)))
    })
    .fail(errors => dispatch(receiveUserErrors(errors.responseJSON)))
)
