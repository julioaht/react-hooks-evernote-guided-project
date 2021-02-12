import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

// **************    useState

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [noteContent, setNoteContent] = useState({})
  const [selected, setSelected] = useState(false)
  const [search, setSearch] = useState("")
  const [showEditForm, setShowEditForm] = useState(false)


// **********VIEW AND DISPLAY



  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
      .then(r => r.json())
      .then(notesArray => setNotes(notesArray))

    }, [])
    


    function handleDisplayNote(selectedNote) {
      // console.log("display note content", selectedNote)
      setSelected(true)
      setNoteContent(selectedNote)
      // console.log(selected)
    }

  // *************SEARCH BAR
  function handleSearchChange(newSearch) {
    setSearch(newSearch)
  }
  
  const displayNotes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))

  // ************ADDNOTE
  function handleAddNote (event){
    event.preventDefault()
    const data = {
      title: "default",
      body: "placeholder",
      user:{
        user:"u"
      }
     }
     
    fetch('http://localhost:3000//api/v1/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
      })
      .then(r => r.json())
      .then(notesObj => setNotes([...notes,notesObj]))
      }

// *************EDIT NOTES

  function handleEditClick(){
    setShowEditForm(true)
  }
  function handleCancel(){
    setShowEditForm(false)
  }

  function handleSubmit(event){
    event.preventDefault()

  //   // i guess the URL is not correct. 
  //   fetch(`http://localhost:3000/api/v1/notes/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       "title": event.target.title.value,
  //       "body": event.target.body.value
  //     }),
  //   })
  //   .then((r) => r.json())
  //   .then
  //   });
  }


  return (
    <>
      <Search search={search} onSearchChange={handleSearchChange}/>
      <div className="container">
        <Sidebar  notes={displayNotes} onDisplayNote={handleDisplayNote} onAddNote={handleAddNote} />
        <Content note={noteContent} selected={selected} showEditForm={showEditForm} handleEditClick={handleEditClick} handleCancel={handleCancel} handleSubmit={handleSubmit}/>
      </div>
    </>
  );
}

export default NoteContainer;
