import React from "react";
import { auth } from "../firebase";

export default function Navbar() {
  const logout = (e) => {
    e.preventDefault();
    console.log("Signing out");
    auth.signOut();
  };

  return (
    <nav>
      <div className="nav-brand">
        <h1>MyNotes</h1>
      </div>
      <div onClick={logout} className="nav-link">
        <button>Log out</button>
        <i className="fas fa-user-minus"></i>
      </div>
    </nav>
  );
}
