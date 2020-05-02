import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import AddUpdateNote from "../components/AddUpdateNote";

export default function Home() {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [search, setSearch] = useState("");

  const notes = useSelector((store) => {
    if (search === "") return store.notes;
    else
      return store.notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase())
      );
  });

  const closeAddPopUp = () => setShowAdd(false);
  const closeEditPopUp = () => setShowEdit(false);
  const openEditPopup = (note) => {
    setNoteToEdit(note);
    setShowEdit(true);
  };

  return (
    <section className="Home">
      <Navbar />
      {showAdd ? (
        <AddUpdateNote
          type="add"
          handleAddCancel={closeAddPopUp}
          handleEditCancel={closeEditPopUp}
        />
      ) : null}

      {showEdit ? (
        <AddUpdateNote
          type="edit"
          note={noteToEdit}
          handleAddCancel={closeAddPopUp}
          handleEditCancel={closeEditPopUp}
        />
      ) : null}

      <div className="search">
        <input
          type="text"
          placeholder="Search Note"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex-wrapper">
        {notes.map((note) => (
          <Note key={note.id} note={note} openEditPopup={openEditPopup} />
        ))}
      </div>
      <div className="plus-button-container">
        <button onClick={() => setShowAdd(true)}>+</button>
      </div>
    </section>
  );
}
