import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDisplayNote, handleCancel, showEditForm}) {
  // console.log({notes}) 
  const displayNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} onDisplayNote={onDisplayNote} handleCancel={handleCancel} showEditForm={showEditForm}/>
  })
  return (
    <ul>
      {displayNotes}
    </ul>
  );
}

export default NoteList;
