import React, { useState } from 'react'
import { Note } from '../../types'
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
            <input 
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                type="text"
                placeholder="note..."
                name="content"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button onClick={handleClick} >Submit</button>
        </section>
    )
}

export default NoteForm