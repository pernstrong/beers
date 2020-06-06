import React from 'react'
import './NoteCard.css'
import { Note } from '../../types'

interface Props {
    note: Note
    deleteNote: (id: Number) => void
}

const NoteCard = (props: Props) => {
    const { note } = props

    return (
        <section className="note-card">
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={() => props.deleteNote(note.id)}>Delete Note</button>
        </section>
    )
}

export default NoteCard