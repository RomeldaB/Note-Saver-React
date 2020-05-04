import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseDelete } from "../store/actions";

export default function Note({ note, openEditPopup }) {
  const dispatch = useDispatch();
  const uid = useSelector((store) => store.firebase.uid);

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <div className="buttons">
        <div onClick={() => openEditPopup(note)}>
          <i className="fas fa-edit"></i>
        </div>
        <div onClick={() => dispatch(firebaseDelete(uid, note.id))}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
