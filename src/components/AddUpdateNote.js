import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAdd, firebaseUpdate } from "../store/actions";

export default function AddUpdateNote(props) {
  const dispatch = useDispatch();
  const uid = useSelector((store) => store.firebase.uid);

  let noteToEdit = null;
  if (props.type === "edit") noteToEdit = props.note;

  const [noteTitle, setNoteTitle] = useState(
    noteToEdit ? noteToEdit.title : ""
  );
  const [noteDescription, setNoteDescription] = useState(
    noteToEdit ? noteToEdit.description : ""
  );
  const [noteColor, setNoteColor] = useState(
    noteToEdit ? noteToEdit.color : "lightskyblue"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    // Validation
    if (noteTitle === "") {
      setErrorMessage("Title cannot be left empty!!");
      return;
    } else if (noteDescription === "") {
      setErrorMessage("Description cannot be left empty!!");
      return;
    }

    const noteData = {
      title: noteTitle,
      description: noteDescription,
      color: noteColor,
    };

    if (noteToEdit) {
      dispatch(firebaseUpdate(uid, noteToEdit.id, noteData));
    } else {
      dispatch(firebaseAdd(uid, noteData));
    }
    handleCancel();
  };

  const handleCancel = () => {
    if (noteToEdit) props.handleEditCancel();
    else props.handleAddCancel();
  };

  return (
    <section className="fixed-form-container">
      <form>
        <h1>{props.type === "edit" ? "Edit Note" : "Add Note"}</h1>

        <div className="inputs">
          <div className="labels">Title</div>
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <div className="labels">Description</div>
          <textarea
            rows="5"
            cols="30"
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
          ></textarea>
          <div className="labels">Color</div>
          <select
            id="colors"
            style={{ backgroundColor: noteColor }}
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
          >
            <option value="lightskyblue">Blue</option>
            <option value="lightcoral">Red</option>
            <option value="rgb(238, 238, 112)">Yellow</option>
            <option value="lightpink">Pink</option>
            <option value="lightsalmon">Orange</option>
            <option value="lightseagreen">Green</option>
          </select>
        </div>
        {errorMessage ? <h2>{errorMessage}</h2> : ""}
        <div className="buttons">
          <button id="cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button id="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
