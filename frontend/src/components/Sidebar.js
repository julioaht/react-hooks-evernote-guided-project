import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onDisplayNote, onAddNote }) {
  // console.log({notes})  
  return (
    <div className="master-detail-element sidebar">
      <NoteList  notes={notes} onDisplayNote={onDisplayNote}/>
      <button onClick={onAddNote}>New</button>
    </div>
  );
}

export default Sidebar;
