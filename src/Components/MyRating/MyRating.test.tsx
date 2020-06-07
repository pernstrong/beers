import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import MyRating from "./MyRating"

describe('MyRating', () => {

    it('should have a My Rating indicator', () => {
        const mockSetRating = jest.fn()
        const { getByText } = render(<MyRating rating='5' setRating={mockSetRating}/>)

        expect(getByText('My Rating: 5')).toBeInTheDocument()
    })
    // mock setRating?
    
})