import React from 'react'
import './NotesDisplay.css'
import { Note } from '../../types'
import NoteCard from '../NoteCard/NoteCard'

interface Props {
    notes: Note[]
    deleteNote: (id: Number) => void
}

const NotesDisplay = (props: Props) => {
    const allNotes = props.notes.map(note => <NoteCard note={note} deleteNote={props.deleteNote}/>)

    return (
        <section className="notes-display-section">
            {allNotes}
        </section>
    )
}

export default NotesDisplay
