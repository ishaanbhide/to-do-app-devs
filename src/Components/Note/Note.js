import React from "react";
import "./Note.css";

export default function Note({ noteTitle, noteCategory, noteMessage }) {
  return (
    <div className="note">
      <p id="note-category">{noteCategory}</p>
      <p id="note-title">{noteTitle}</p>
      <p id="note-message">{noteMessage}</p>
      <button id="del-button">Delete</button>
    </div>
  );
}
