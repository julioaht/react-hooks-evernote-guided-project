import React from "react";

function NoteItem({note, onDisplayNote, handleCancel, showEditForm}) {


  const truncate = note.body.split('.')

  return (
    <li onClick={()=>{
      if(showEditForm === true){
        handleCancel()
      }
      onDisplayNote(note)}
      }>
      <h2>{note.title}</h2>
      <p>{truncate[0]}...</p>
    </li>
  );
}

export default NoteItem;
