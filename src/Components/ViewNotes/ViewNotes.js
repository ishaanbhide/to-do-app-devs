import React from "react";
import "./ViewNotes.css";
import Note from "../Note/Note";

export default function ViewNotes() {
  return (
    <div className="view-notes">
      <div className="notes-grid">
        <Note noteTitle="HI" noteCategory="Hello" noteMessage="Goodbye" />
        <Note noteTitle="HI" noteCategory="Hello" noteMessage="Goodbye" />
        <Note noteTitle="HI" noteCategory="Hello" noteMessage="Goodbye" />
        <Note noteTitle="HI" noteCategory="Hello" noteMessage="Goodbye" />
      </div>
    </div>
  );
}
