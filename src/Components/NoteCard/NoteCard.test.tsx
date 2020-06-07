import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NoteCard from "./NoteCard"

describe('NoteCard', () => {
    it('should display a title and content', () => {
        const mockDeleteNote = jest.fn()
        const mockNote = {
                id: 5, 
                note_type: 'text', 
                title: "IPA notes", 
                content: "beautiful citrus notes"
                } 
        const { getByText } = render(<NoteCard 
            note={mockNote}
            deleteNote={mockDeleteNote}
            />
            )
            
            expect(getByText('IPA notes')).toBeInTheDocument()
            expect(getByText('beautiful citrus notes')).toBeInTheDocument()
        })
        
        it.skip('should call the deleteNote mehtod when the delete button is clicked', () => {
            const mockDeleteNote = jest.fn()
        const mockNote = {
                id: 5, 
                note_type: 'text', 
                title: "IPA notes", 
                content: "beautiful citrus notes"
                } 
        const { getByText } = render(<NoteCard 
            note={mockNote}
            deleteNote={mockDeleteNote}
            />
            )
        })
    })