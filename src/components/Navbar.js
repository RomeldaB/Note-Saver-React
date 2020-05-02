import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-brand">
        <i className="fas fa-sticky-note"></i>
        <h1>MyNotes</h1>
      </div>
      <div className="nav-link">
        <button>Log out</button>
        <i className="fas fa-user-minus"></i>
      </div>
    </nav>
  );
}
