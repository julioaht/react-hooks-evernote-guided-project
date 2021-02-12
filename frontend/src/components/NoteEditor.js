import React, { useState } from "react";

function NoteEditor({ note, handleCancel }) {

  const [editTitle, setEditTitle] = useState(note.title)
  const [editBody, setEditBody] = useState(note.body)


  function handleSubmit(event){
    event.preventDefault()

  //   // i guess the URL is not correct. 
    fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "title": editTitle,
        "body": editBody
      }),
    })
    .then((r) => r.json())
    .then(console.log)
    
  }



  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input onChange={(e) => setEditTitle(e.target.value)} value={editTitle} type="text" name="title" />
      <textarea onChange={(e) => setEditBody(e.target.value)} value={editBody} name="body" />
      <div className="button-row">
        <input  className="button" type="submit" value="Save" />
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor