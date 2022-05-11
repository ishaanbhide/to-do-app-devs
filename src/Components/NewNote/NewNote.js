import React from "react";
import "./NewNote.css";

export default function New() {
  return (
    <div className="new-note">
      <input id="newTitle" type="text" placeholder="Enter task title" />
      <input id="newCategory" type="text" placeholder="Enter a category" />
      <textarea id="newText" placeholder="Enter descriptions"></textarea>
      <button id="addButton">Add</button>
    </div>
  );
}
