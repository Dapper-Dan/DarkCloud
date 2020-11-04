import { combineReducers } from "redux";
import songsErrorsReducer from "./songs_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import usersErrorsReducer from "./users_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  songs: songsErrorsReducer,
  users: usersErrorsReducer
});

export default errorsReducer;