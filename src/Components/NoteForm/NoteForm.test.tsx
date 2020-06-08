import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NoteForm from "./NoteForm"

describe('NoteForm', () => {
    it('should display two input fields', () => {
        const { getByPlaceholderText } = render(<NoteForm addNote={() => null}/>)
        
        expect(getByPlaceholderText('Beer name')).toBeInTheDocument()
        expect(getByPlaceholderText('notes')).toBeInTheDocument()
    })

    it('should display a submit button', () => {
        const { getByText } = render(<NoteForm addNote={() => null}/>)
        
        expect(getByText('Submit')).toBeInTheDocument()
    })

    it('should display the text as it is entered in the inputs', () => {
        const { getByDisplayValue, getByPlaceholderText } = render(<NoteForm addNote={() => null}/>)
        
        fireEvent.change(getByPlaceholderText('Beer name'), {target: {value: 'Pomona\'s Art'},})
        fireEvent.change(getByPlaceholderText('notes'), {target: {value: 'delicious'},})
       
        expect(getByDisplayValue('Pomona\'s Art')).toBeInTheDocument()
        expect(getByDisplayValue('delicious')).toBeInTheDocument()

    })
    
    it('should call the addNote button with the correct arguments when submit is clicked', () => {
        const mockAddNote = jest.fn()
        Date.now = jest.fn().mockImplementation(() => 12345)

        const { getByText, getByPlaceholderText } = render(<NoteForm addNote={mockAddNote}/>)
        
        fireEvent.change(getByPlaceholderText('Beer name'), {target: {value: 'Pomona\'s Art'},})
        fireEvent.change(getByPlaceholderText('notes'), {target: {value: 'delicious'},})
        fireEvent.click(getByText('Submit'))
        
        expect(mockAddNote).toHaveBeenCalledWith({id: 12345, note_type: "text", title: 'Pomona\'s Art', content: 'delicious'})
        
    })
})