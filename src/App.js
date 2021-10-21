import React, { useEffect, useState } from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer.js';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.js';

function App() {
  const [notes,setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
    // {
    //   text:"take Note here",
    //   time:"11:00 am",
    //   color:"pink"
    // },
    // {
    //   text:"take Note here",
    //   time:"12:00 am",
    //   color:"orange"
    // },
    // {
    //   text:"take Note here",
    //   time:"1:00 pm",
    //   color:"blue"
    // },
    // {
    //   text:"take Note here",
    //   time:"2:00 am",
    //   color:"violet"
    // },
    // {
    //   text:"take Note here",
    //   time:"3:00 am",
    //   color:"green"
    // },
  );
  const addNote=(color)=>{
const tempNotes=[...notes]
tempNotes.push({
  id:Date.now()+""+Math.floor(Math.random()*78),
  text:"",
  time:Date.now(),
  color,
});
setNotes(tempNotes);
  };
  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const updateText=(text,id)=>{
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text=text;
    setNotes(tempNotes);

  }
  
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
   {/* <h1>HELLO</h1> */}
   <Sidebar addNote={addNote}/>
   <NoteContainer notes={notes}
    deleteNote={deleteNote}
    updateText={updateText}
   />
    </div>
  );
}

export default App;
