import React from 'react'
import './NotesDisplay.css'
import { Note } from '../../types'
import NoteCard from '../NoteCard/NoteCard'

interface Props {
    notes: Note[]
    deleteNote: (id: Number) => void
}

const NotesDisplay = (props: Props) => {
    const allNotes = props.notes.map(note => <NoteCard note={note} deleteNote={props.deleteNote} key={note.id}/>)

    return (
        <>
            <h4 id="notes-display-title">Beer Notes</h4>
            <section className="notes-display-section">
            {!props.notes.length && <p>No beer notes...add a note to see it here</p> }
             {allNotes}
            </section>
        </>
    )
}

export default NotesDisplay
