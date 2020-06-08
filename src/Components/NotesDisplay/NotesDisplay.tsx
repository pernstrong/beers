import React from 'react'
import './NotesDisplay.css'
import { Note } from '../../types'
import NoteCard from '../NoteCard/NoteCard'
import Notes from '../Notes/Notes'

interface Props {
    notes: Note[]
    deleteNote: (id: Number) => void
}

const NotesDisplay = (props: Props) => {
    const allNotes = props.notes.map(note => <NoteCard note={note} deleteNote={props.deleteNote} key={note.id}/>)

    return (
        <section className="notes-display-section">
            <h4 className="notes-display-title">Beer Notes</h4>
            {!props.notes.length && <p>No beer notes...add a note to see it here</p> }
            {allNotes}
        </section>
    )
}

export default NotesDisplay
