import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Search from "./Search"

describe('Search', () => {
    
    it.skip('should have a search text input', () => {
        const mockFindByLocation = jest.fn()
        const { getByPlaceholderText } = render(<Search findByLocation={mockFindByLocation} />)
        
        expect(getByPlaceholderText('search by zip code')).toBeInTheDocument()
    })
    
    it.skip('should display text as it is entered', () => {
        const mockFindByLocation = jest.fn()
        const { getByText, getByPlaceholderText } = render(<Search findByLocation={mockFindByLocation} />)

        fireEvent.change(getByPlaceholderText('search by zip code'), { target: {value: '80203'}})

        expect(getByText('80203')).toBeInTheDocument()
    })
    
    it.skip('should call the findByLocation method when the search button is clicked', () => {
        const mockFindByLocation = jest.fn()
        const { getByText } = render(<Search findByLocation={mockFindByLocation} />)

    })
})