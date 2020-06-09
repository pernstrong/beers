import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'
import Search from "./Search"

describe('Search', () => {
    
    it('should have a search text input', () => {
        const mockFindByLocation = jest.fn()
        const { getByPlaceholderText } = render(<MemoryRouter><Search findByLocation={mockFindByLocation} /></MemoryRouter>)
        
        expect(getByPlaceholderText('search by city or zip')).toBeInTheDocument()
    })
    
    it('should display text as it is entered', () => {
        const mockFindByLocation = jest.fn()
        const { getByDisplayValue, getByPlaceholderText } = render(<MemoryRouter><Search findByLocation={mockFindByLocation} /></MemoryRouter>)

        fireEvent.change(getByPlaceholderText('search by city or zip'), { target: {value: '80203'}})
        
        expect(getByDisplayValue('80203')).toBeInTheDocument()
    })
    
    it('should call the findByLocation method when the search button is clicked', () => {
        const mockFindByLocation = jest.fn()
        const { getByText, getByPlaceholderText } = render(<MemoryRouter><Search findByLocation={mockFindByLocation} /></MemoryRouter>)
        
        fireEvent.change(getByPlaceholderText('search by city or zip'), { target: {value: '80203'}})
        fireEvent.click(getByText('Search'))

        expect(mockFindByLocation).toHaveBeenCalledWith("80203")

    })
})