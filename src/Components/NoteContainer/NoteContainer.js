import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css"
const NoteContainer = (props) => {
    const reverArray=(arr)=>{
        const array=[]
        for (let i=arr.lenght-1;i>0;--i){
            array.push(arr[i])
        }
        return array
    }
    const notes=reverArray(props.notes)
    return (
        <div className="note-container">
            <h2 className="heading">iNotes</h2>
        <div className="note-container_notes">
            {
                props.notes.map((item,index)=><Note
                key={index}
                note={item}
                deleteNote={props.deleteNote}
                updateText={props.updateText}
                
                />)
            }
            {/* {notes?.lenght>0?(
              props.notes.map((item)=><Note
                key={item.id}
                note={item}
                
                />)):(<h3> Please Add your Notes </h3>)

            } */}

            {/* <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/>
            <Note note={
                {
                    text:"write your notes here",
                    time:"2:15pm",
                    // date:"21oct 2021",
                    color:'cyan',
                }
            }/> */}

        </div>
        </div>
    )
}

export default NoteContainer
