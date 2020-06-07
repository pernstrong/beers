import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent, waitFor } from "@testing-library/react"
import FavoritesContainer from "./FavoritesContainer"
import { testData } from '../../testData'

describe('FavoritesContainer', () => { 

    it('should have a favorites title', async () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render
        (<FavoritesContainer favoriteIds={[]} toggleFavorite={mockToggleFavorites}/>)
        
        // const favorites = await waitFor(() => getByText('Favorites'))
        const favorites = getByText('Favorites')
        expect(favorites).toBeInTheDocument()
    })

    it('should let the use know if there are no favorites', () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render(<FavoritesContainer favoriteIds={[]} toggleFavorite={mockToggleFavorites}/>)
        
        expect(getByText('Add some favorites to see them here!')).toBeInTheDocument()
    })
    
    it.skip('should display the favorites info', () => {
        const mockToggleFavorites = jest.fn()
        const { getByText } = render
        (<FavoritesContainer favoriteIds={[1, 2]} toggleFavorite={mockToggleFavorites}/>)
        // need to add favorites mocked data
    })
})