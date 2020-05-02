export const ADD_NOTE = "AddNote";
export const DEL_NOTE = "DelNote";
export const UPDATE_NOTE = "UpdateNote";
export const SET_ALL = "SetAll";

export const addNote = (data) => {
  return {
    type: ADD_NOTE,
    data,
  };
};

export const deleteNote = (id) => {
  return {
    type: DEL_NOTE,
    id,
  };
};

export const updateNote = (id, changes) => {
  return {
    type: UPDATE_NOTE,
    id,
    changes,
  };
};

// TODO remove if not needed
export const setAll = (data) => {
  return {
    type: SET_ALL,
    data,
  };
};
