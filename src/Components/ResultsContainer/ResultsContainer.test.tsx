import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import ResultsContainer from "./ResultsContainer"
import { testData } from '../../testData'
import { MemoryRouter } from 'react-router-dom'

describe('ResultsContainer', () => {
    it('should display a results title', () => {
        const { getByText } = render(<MemoryRouter><ResultsContainer results={testData} isLoading={false} searchInput={'80220'} toggleFavorite={() => null}/></MemoryRouter>)

        expect(getByText('Results for 80220')).toBeInTheDocument()
    })
    it('should let the user know if no results were found', () => {
        const { getByText } = render(<MemoryRouter><ResultsContainer results={[]} isLoading={false} searchInput={'80220'} toggleFavorite={() => null}/></MemoryRouter>)

        expect(getByText('No breweries found for 80220')).toBeInTheDocument()
    })
    
    it('should display some brewery results', () => {
        const { getByText } = render(<MemoryRouter><ResultsContainer results={testData} isLoading={false} searchInput={'80220'} toggleFavorite={() => null}/></MemoryRouter>
        )

        expect(getByText('Dave\'s Brewhouse of Pain')).toBeInTheDocument()
        expect(getByText('Dave\'s Brewhouse of Love')).toBeInTheDocument()
    })
})