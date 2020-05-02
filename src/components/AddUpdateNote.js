import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../store/actions";

export default function AddUpdateNote(props) {
  const dispatch = useDispatch();
  let noteToEdit = null;
  if (props.type === "edit") noteToEdit = props.note;

  const [noteTitle, setNoteTitle] = useState(
    noteToEdit ? noteToEdit.title : ""
  );

  const [noteDescription, setNoteDescription] = useState(
    noteToEdit ? noteToEdit.description : ""
  );

  const [noteColor, setNoteColor] = useState(
    noteToEdit ? noteToEdit.color : "lightpink"
  );

  const handleSave = (e) => {
    e.preventDefault();
    const noteData = {
      title: noteTitle,
      description: noteDescription,
      color: noteColor,
    };

    if (noteToEdit) {
      dispatch(updateNote(noteToEdit.id, noteData));
    } else {
      dispatch(addNote(noteData));
    }
    handleCancel();
  };

  const handleCancel = () => {
    if (noteToEdit) props.handleEditCancel();
    else props.handleAddCancel();
  };

  return (
    <section className="fixed-for-container">
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
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
          >
            <option value="lightblue" style={{ backgroundColor: "lightblue" }}>
              Blue
            </option>
            <option
              value="lightcoral"
              style={{ backgroundColor: "lightcoral" }}
            >
              Coral
            </option>
            <option value="lightcyan" style={{ backgroundColor: "lightcyan" }}>
              Cyan
            </option>
            <option value="lightpink" style={{ backgroundColor: "lightpink" }}>
              Pink
            </option>
            <option
              value="lightsalmon"
              style={{ backgroundColor: "lightsalmon" }}
            >
              Salmon
            </option>
            <option
              value="lightseagreen"
              style={{ backgroundColor: "lightseagreen" }}
            >
              Sea green
            </option>
          </select>
        </div>
        <div className="buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </form>
    </section>
  );
}
