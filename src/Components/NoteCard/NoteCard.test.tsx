import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NoteCard from "./NoteCard"
import { testNote } from '../../testData'

describe('NoteCard', () => {

    it('should display a title and content', () => {
        const mockDeleteNote = jest.fn()
       
        const { getByText } = render(<NoteCard 
            note={testNote}
            deleteNote={mockDeleteNote}
            />
            )
            
            expect(getByText('Pomona\'s Art')).toBeInTheDocument()
            expect(getByText('delicious')).toBeInTheDocument()
        })
        
        it('should call the deleteNote method when the delete button is clicked', () => {
            const mockDeleteNote = jest.fn()
        
            const { getByText } = render(<NoteCard 
            note={testNote}
            deleteNote={mockDeleteNote}
            />
            )

            fireEvent.click(getByText('Delete Note'))

            expect(mockDeleteNote).toHaveBeenCalledWith(5)
        })
        
    })