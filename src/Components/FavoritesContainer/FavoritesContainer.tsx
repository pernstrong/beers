import React, { useState, useEffect } from 'react'
import './FavoritesContainer.css'
import { Brewery } from '../../types'
import { fetchBreweryById } from '../../apiCalls'
import ResultCard from '../ResultCard/ResultCard'

interface Props {
    favoriteIds: Number[]
    toggleFavorite: (id: Number) => void
}

const FavoritesContainer = (props: Props) => {

    const [ favoritesData, setFavoritesData ] = useState<Brewery[]>([])

    useEffect(() => {
       async function fetchFavorites() {
        const favorites: any =  await Promise.all(props.favoriteIds.map(favorite => fetchBreweryById(favorite)))
        setFavoritesData(favorites)
     } 
     fetchFavorites()
    }, [props.favoriteIds])
  
    const favoritesToDisplay = favoritesData.map(favorite => <ResultCard result={favorite}  key={favorite.id} toggleFavorite={props.toggleFavorite} />)

    return (
        <section className="favorites-container">
            <h2>Favorites</h2>
            <section className="results-container-display">
                {!favoritesToDisplay.length && <p>Add some favorites to see them here!</p> }
                {favoritesToDisplay}
            </section>
        </section>
    )
}

export default FavoritesContainer