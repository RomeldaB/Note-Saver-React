import React from "react";

export default function Note({ note, openEditPopup }) {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <div className="buttons">
        <button onClick={() => openEditPopup(note)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
