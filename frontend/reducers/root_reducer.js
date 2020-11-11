import { combineReducers } from "redux";
import sessionReducer from "./session_reducer.js";
import entitiesReducer from "./entities_reducer.js";
import errorsReducer from "./errors/errors_reducer.js";

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer
});

export default rootReducer;