import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Notes from "./Notes"

describe('Notes', () => {
    it('should display a notes header', () => {
        const { getByText } = render(<Notes id={1}/>)
        
        expect(getByText('Notes')).toBeInTheDocument()
    })
    
    it('should render the MyRating component', () => {
        const { getByText } = render(<Notes id={1}/>)
        
        expect(getByText('My Rating: not rated')).toBeInTheDocument()
    })

    it('should render the Features component', () => {
        const { getByText } = render(<Notes id={1}/>)
        
        expect(getByText('Patio')).toBeInTheDocument()
        expect(getByText('Dog-friendly')).toBeInTheDocument()
    })

    it('should render the NotesForm component', () => {
        const { getByPlaceholderText } = render(<Notes id={1}/>)
        
        expect(getByPlaceholderText('Beer name')).toBeInTheDocument()
    })
})