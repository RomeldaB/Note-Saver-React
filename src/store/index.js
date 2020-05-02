import NotesReducer from "./reducers/notes";
import { combineReducers } from "redux";

export default combineReducers({
  notes: NotesReducer,
});
