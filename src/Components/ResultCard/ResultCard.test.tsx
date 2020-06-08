import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
// import { mocked } from "ts-jest/utils"
import ResultCard from "./ResultCard"

import { MemoryRouter } from 'react-router-dom'
import { testData } from '../../testData'
// import { fetchBreweriesByLocation } from '../../apiCalls'
// jest.mock('../../apiCalls')

// mocked(fetchBreweriesByLocation).mockImplementation((id: Number) => Promise.resolve(testData))

describe('ResultCard', () => {
    it('should display the brewery name', () => {
        const { getByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={() => null}/></MemoryRouter>)

        expect(getByText('Dave\'s Brewhouse of Pain')).toBeInTheDocument()
    })

    it('should display the brewery natypeme', () => {
        const { getByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={() => null}/></MemoryRouter>)

        expect(getByText('type: micro')).toBeInTheDocument()
    })
    
    it('should display the brewery street address', () => {
        const { getByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={() => null}/></MemoryRouter>)

        expect(getByText('1 Street Avenue')).toBeInTheDocument()
    })
    
    it('should display the My Rating', () => {
        const { getByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={() => null}/></MemoryRouter>)

        expect(getByText('My Rating: not rated')).toBeInTheDocument()
    })
    
    it('should display a details button', () => {
        const { getByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={() => null}/></MemoryRouter>)
        
        expect(getByText('Details')).toBeInTheDocument()
    })

    it('should display a favorites button', () => {
        const { getByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={() => null}/></MemoryRouter>)
        
        expect(getByText('Fav')).toBeInTheDocument()
    })

    it('should call the toggleFavorites method when the favorite button is clicked', () => {
        const mockToggleFavorites = jest.fn()
        const { getAllByText } = render(<MemoryRouter><ResultCard result={testData[0]} key={1} toggleFavorite={mockToggleFavorites}/></MemoryRouter>)

        fireEvent.click(getAllByText('Fav')[0])

        expect(mockToggleFavorites).toHaveBeenCalled()
    })
})