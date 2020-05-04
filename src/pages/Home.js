import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import AddUpdateNote from "../components/AddUpdateNote";
import { Redirect } from "react-router-dom";
import { firebaseEvents, setUid } from "../store/actions";
import { auth } from "../firebase";

const Home = () => {
  const dispatch = useDispatch();

  const [noteToEdit, setNoteToEdit] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [search, setSearch] = useState("");

  const loggedIn = useSelector((store) => store.authentication.loggedIn);
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

  const handleAsync = async () => {
    let waitForCurrentUser = setInterval(() => {
      if (auth.currentUser && auth.currentUser.uid !== null) {
        clearInterval(waitForCurrentUser);
        let uid = auth.currentUser.uid;
        dispatch(firebaseEvents(uid));
        dispatch(setUid(uid));
      }
    }, 100);
  };

  useEffect(() => {
    handleAsync();
  }, []);

  return (
    <section className="Home">
      {loggedIn === false ? <Redirect to="/login" /> : ""}

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
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search Note"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="plus-button-container">
          <button onClick={() => setShowAdd(true)}>+</button>
        </div>
      </div>
      <div className="flex-wrapper">
        {notes.length ? (
          notes.map((note) => (
            <Note key={note.id} note={note} openEditPopup={openEditPopup} />
          ))
        ) : (
          <div id="first-message">
            <h1>You haven't written any notes yet!</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
