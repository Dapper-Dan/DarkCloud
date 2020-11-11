import { combineReducers } from "redux";
import usersReducer from "./users_reducers.js";
import songsReducer from "./songs_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer
});

export default entitiesReducer;