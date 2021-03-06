import React, { useState } from 'react'
import { Note } from '../../types'
import './NoteForm.css'

interface Props {
    addNote: (note: Note) => void
}

const NoteForm = (props: Props) => {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    const handleClick = () => {
        const newNote = {
            id: Date.now(),
            note_type: "text",
            title,
            content
        }
        props.addNote(newNote)
        clearInputs()
    }

    const clearInputs = () => {
        setTitle('')
        setContent('')
    }

    return (
        <section className="note-form">
            <h4>Add Note</h4>
            <input 
                type="text"
                placeholder="Beer name"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                aria-label="beer name"
            />
            <input 
                type="text"
                placeholder="notes"
                name="content"
                value={content}
                onChange={e => setContent(e.target.value)}
                aria-label="beer notes"
            />
            <button onClick={handleClick} >Submit</button>
        </section>
    )
}

export default NoteForm