import React from "react";

function NoteViewer({ note, handleEditClick }) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={()=>handleEditClick()}>Edit</button>
    </>
  );
}

export default NoteViewer;
