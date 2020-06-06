import React, { useState, useEffect } from 'react'
import { Note } from '../../types'
import RatingContext from '../../RatingContext'

import NoteForm from '../NoteForm/NoteForm'
import NotesDisplay from '../NotesDisplay/NotesDisplay'
import MyRating from '../MyRating/MyRating'
import Features from '../Features/Features'

interface Props {
    id: Number
}

const Notes = (props: Props) => {
    // const { rating, features } = props
    const [ notes, updateNotes ] = useState<Note[]>([])
    const [ rating, updateRating ] = useState('No rating')
    const [ features, updateFeatures ] = useState<string[]>([])

    const addNote = (note: Note) => {
        updateNotes(prev => [...prev, note])
    }

    const deleteNote = (id: Number) => {
        const filteredNotes = notes.filter(note => id !== note.id)
        updateNotes(filteredNotes)
    }

    useEffect(() => {
        const rating = localStorage.getItem(`rating-${props.id}`);
        if (rating) {
          updateRating(JSON.parse(rating));
        }
      }, [props.id]);
    
      useEffect(() => {
        localStorage.setItem(`rating-${props.id}`, JSON.stringify(rating));
      }, [rating, props.id]);

    useEffect(() => {
        const notes = localStorage.getItem(`notes-${props.id}`);
        if (notes) {
          updateNotes(JSON.parse(notes));
        }
      }, [props.id]);
    
      useEffect(() => {
        localStorage.setItem(`notes-${props.id}`, JSON.stringify(notes));
      }, [notes, props.id]);

    // const setRating = (rating: string) => {
    //     updateRating(rating)
    // }
    const setFeatures = (feature: string) => {
        if (features.includes(feature)) {
            const filteredFeatures = features.filter(f => f !== feature)
            updateFeatures(filteredFeatures)
        } else {
          updateFeatures(prev => [...prev, feature])
        }
    }



    return (
        <section className="notes-section">
            <h3>Notes</h3>
            {/* <RatingContext.Provider value={rating}> */}
                <MyRating setRating={updateRating} rating={rating}/>
                <Features setFeatures={setFeatures} />
            {/* </RatingContext.Provider> */}
            <NoteForm addNote={addNote} />
            <NotesDisplay notes={notes} deleteNote={deleteNote}/>
        </section>
    )
}

export default Notes