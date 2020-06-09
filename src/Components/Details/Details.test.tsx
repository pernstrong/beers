import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import Details from "./Details"
import { testData } from '../../testData'
import { fetchBreweryById } from '../../apiCalls'
jest.mock('../../apiCalls')

mocked(fetchBreweryById).mockImplementation((id: Number) => Promise.resolve(testData[0]))

describe('Details', () => { 
    it('should give basic info on the brewery', async () => {
        const { getByText } = render(<Details id={1} isFavorite={false} toggleFavorite={() => {}}/>)

        await waitFor(() => getByText('Dave\'s Brewhouse of Pain'))
        
        expect(getByText('Dave\'s Brewhouse of Pain')).toBeInTheDocument()
        expect(getByText("1 Street Avenue Denver, Colorado")).toBeInTheDocument()
        expect(getByText('555-555-5555')).toBeInTheDocument()
    })
    
    it('should render the notes component', async () => {
        const { getByText } = render(<Details id={1} isFavorite={false} toggleFavorite={() => {}}/>)
    
        await waitFor(() => getByText('Dave\'s Brewhouse of Pain'))
        
        expect(getByText('My Notes')).toBeInTheDocument()
    })

})