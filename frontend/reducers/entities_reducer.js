import { combineReducers } from "redux";
import usersReducer from "./users_reducers.js";

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;