import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, waitFor } from "@testing-library/react"
import { mocked } from "ts-jest/utils"
import FavoritesContainer from "./FavoritesContainer"
import { MemoryRouter } from 'react-router-dom'
import { testData } from '../../testData'
import { fetchBreweryById } from '../../apiCalls'
jest.mock('../../apiCalls')

 mocked(fetchBreweryById).mockImplementation((id: Number) => Promise.resolve(testData[0]))

 describe('FavoritesContainer', () => { 

    it('should have a favorites title', async () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render
        (<MemoryRouter><FavoritesContainer favoriteIds={[]} toggleFavorite={mockToggleFavorites}/></MemoryRouter>)
        
        const favorites = getByText('Favorites')
        await waitFor(() => expect(favorites).toBeInTheDocument())
    })

    it('should let the use know if there are no favorites', async () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render(<MemoryRouter><FavoritesContainer favoriteIds={[]} toggleFavorite={mockToggleFavorites}/></MemoryRouter>)
        
        await waitFor(() => expect(getByText('Add some favorites to see them here!')).toBeInTheDocument())
    })

    it('should display a back to search button if there are no favorites', async () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render
        (<MemoryRouter><FavoritesContainer favoriteIds={[]} toggleFavorite={mockToggleFavorites}/></MemoryRouter>)

        await waitFor(() => expect(getByText('Add some favorites to see them here!')).toBeInTheDocument())

        expect(getByText('Back to Search')).toBeInTheDocument()
    })
    
    it('should display the favorites info', async () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render
        (<MemoryRouter><FavoritesContainer favoriteIds={[1]} toggleFavorite={mockToggleFavorites}/></MemoryRouter>)

        await waitFor(() => getByText("Dave's Brewhouse of Pain"))

        expect(getByText("Dave's Brewhouse of Pain")).toBeInTheDocument()
        expect(getByText("My Rating: not rated")).toBeInTheDocument()
    })
})
