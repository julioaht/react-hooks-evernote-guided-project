import React from "react";

function NoteEditor({note, handleCancel, handleSubmit}) {
  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" defaultValue={note.title}/>
      <textarea name="body" defaultValue={note.body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor