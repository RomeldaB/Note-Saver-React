import * as actions from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      const arrayOfIds = state.map((note) => note.id);
      if (!arrayOfIds.includes(action.id))
        return [...state, { id: action.id, ...action.data }];
      else return state;
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
