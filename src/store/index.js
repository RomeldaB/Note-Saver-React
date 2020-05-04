import NotesReducer from "./reducers/notes";
import AuthReducer from "./reducers/authentication";
import FirebaseReducer from "./reducers/firebase";
import { combineReducers } from "redux";

export default combineReducers({
  notes: NotesReducer,
  authentication: AuthReducer,
  firebase: FirebaseReducer,
});
