import { db } from "../firebase";
import { v4 } from "uuid";

export const ADD_NOTE = "addNote";
export const DEL_NOTE = "delNote";
export const UPDATE_NOTE = "updateNote";
export const LOG_IN = "logIn";
export const LOG_OUT = "logOut";
export const SET_UID = "setUid";

export const setUid = (uid) => {
  return {
    type: SET_UID,
    uid,
  };
};

export const addNote = (id, data) => {
  return {
    type: ADD_NOTE,
    data,
    id,
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

export const logIn = () => {
  return {
    type: LOG_IN,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const firebaseEvents = (uid) => {
  return async (dispatch) => {
    const ref = await db.ref("" + uid);

    ref.on("child_added", (snapshot) => {
      const id = snapshot.key;
      const note = snapshot.val();
      dispatch(addNote(id, note));
    });

    ref.on("child_changed", (snapshot) => {
      const id = snapshot.key;
      const note = snapshot.val();
      dispatch(updateNote(id, note));
    });

    ref.on("child_removed", (snapshot) => {
      const id = snapshot.key;
      dispatch(deleteNote(id));
    });
  };
};

export const firebaseAdd = (uid, data) => {
  return async (dispatch) => {
    const newId = v4();
    const ref = db.ref("" + uid + "/" + newId);

    ref.set(data, (err) => {
      if (err) {
        console.log("Error on adding firebase entry!");
      }
    });
  };
};

export const firebaseDelete = (uid, id) => {
  return async (dispatch) => {
    const ref = db.ref("" + uid + "/" + id);

    ref.remove((err) => {
      if (err) {
        console.log("Error on deleting firebase entry!");
      }
    });
  };
};

export const firebaseUpdate = (uid, id, data) => {
  return async (dispatch) => {
    const ref = db.ref("" + uid + "/" + id);

    ref.update(data, (err) => {
      if (err) {
        console.log("Error on updating firebase entry!");
      }
    });
  };
};
