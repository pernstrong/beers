import React, { useState, useEffect } from 'react'
import './Notes.css'
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
    const [ notes, updateNotes ] = useState<Note[]>([])
    const [ rating, updateRating ] = useState('not rated')
    const [ features, updateFeatures ] = useState<string[]>([])

    const addNote = (note: Note) => {
        updateNotes(prev => [...prev, note])
    }

    const deleteNote = (id: Number) => {
        const filteredNotes = notes.filter(note => id !== note.id)
        updateNotes(filteredNotes)
    }

    const setFeatures = (feature: string) => {
      if (features.includes(feature)) {
          const filteredFeatures = features.filter(f => f !== feature)
          updateFeatures(filteredFeatures)
      } else {
        updateFeatures(prev => [...prev, feature])
      }
  }

  useEffect(() => {
    const recoveredFeatures = localStorage.getItem(`features-${props.id}`)
    if (recoveredFeatures) {
      updateFeatures(JSON.parse(recoveredFeatures))
    }
  }, [props.id])
  
  useEffect(() => {
    localStorage.setItem(`features-${props.id}`, JSON.stringify(features))
    }, [features, props.id])

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

  
    



    return (
        <section>
            <h3 id="notes-header">My Notes</h3>
            <section className="notes-section">
              <section className="rating-features">
                <MyRating setRating={updateRating} rating={rating}/>
                <Features setFeatures={setFeatures} features={features}/>
              </section>
              {/* <section className="notes-display"> */}
                <NotesDisplay notes={notes} deleteNote={deleteNote}/>
                <NoteForm addNote={addNote} />
              {/* </section> */}
            </section>
        </section>
    )
}

export default Notes