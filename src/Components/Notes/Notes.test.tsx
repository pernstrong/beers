import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Notes from "./Notes"

describe('Notes', () => {
    it('should display a notes title', () => {
        const { getByText } = render(<Notes id={1} isFavorite={false} toggleFavorite={() => {}}/>)
        
        expect(getByText('My Notes')).toBeInTheDocument()
    })
    
    it('should render the MyRating component', () => {
        const { getByText } = render(<Notes id={1} isFavorite={false} toggleFavorite={() => {}}/>)
        
        expect(getByText('My Rating: not rated')).toBeInTheDocument()
    })

    it('should render the Features component', () => {
        const { getByText } = render(<Notes id={1} isFavorite={false} toggleFavorite={() => {}}/>)
        
        expect(getByText('Patio')).toBeInTheDocument()
        expect(getByText('Dog-friendly')).toBeInTheDocument()
    })

    it('should render the NotesForm component', () => {
        const { getByPlaceholderText } = render(<Notes id={1} isFavorite={false} toggleFavorite={() => {}}/>)
        
        expect(getByPlaceholderText('Beer name')).toBeInTheDocument()
    })

    it('should render the call the toggleFavorite method when the Favorite button is clicked', async () => {
        const mockToggleFavorite = jest.fn()
        const { getByText } = render(<Notes id={1} isFavorite={false} toggleFavorite={mockToggleFavorite}/>)
       
        fireEvent.click(getByText('Add Favorite'))
        
        expect(mockToggleFavorite).toHaveBeenCalledWith(1)
    })

    
})