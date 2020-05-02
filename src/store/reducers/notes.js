import { v4 } from "uuid";
import * as actions from "../actions";

const initialState = [
  {
    id: "aa",
    title: "Ah jete!",
    description: "Te dua sa me s'ka!",
    color: "#123456",
  },
  {
    id: "ab",
    title: "Oh dashuria!",
    description: "Te dua sa me s'ka!",
    color: "#856993",
  },
  {
    id: "cb",
    title: "Te duaaaaaaaaa!",
    description: "Te dua sa me s'ka!",
    color: "#eed24a",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      const id = v4();
      return [...state, { id, ...action.data }];
    case actions.DEL_NOTE:
      return state.filter((note) => note.id !== action.id);
    case actions.UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.id ? Object.assign(note, action.changes) : note
      );
    default:
      return state;
  }
};
