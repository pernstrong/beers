import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from '../Header/Header'
import Search from '../Search/Search'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import Details from '../Details/Details'

import { fetchBreweriesByLocation } from "../../apiCalls"
import { Brewery } from '../../types'
import RatingContext from '../../RatingContext';

const App = () => {
  const [ breweryResults, setBreweryResults ] = useState<Brewery[]>([])
  const [ favorites, updateFavorites ] = useState<Number[]>([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ searchInput, setSearchInput ] = useState('')

  // start with just zip code? then include city?
  const findByLocation = async (searchInput: string) => {
    setIsLoading(true)
    const breweryList = await fetchBreweriesByLocation(searchInput)
    setBreweryResults(breweryList)
    setIsLoading(false)
    setSearchInput(searchInput)
  }

  const toggleFavorite = (id: Number): void => {
    if (!favorites.includes(id)) updateFavorites([...favorites, id])
    else updateFavorites(favorites.filter(favorite => favorite !== id))
  }

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      updateFavorites(JSON.parse(favorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <section className="App">
      <Header />
      <Switch>
         <Route path="/results">
            <ResultsContainer results={breweryResults} isLoading={isLoading} toggleFavorite={toggleFavorite} searchInput={searchInput}/>
          </Route>
        <Route path="/favorites">
          <FavoritesContainer favoriteIds={favorites} toggleFavorite={toggleFavorite}/>
        </Route>
        <Route exact path="/">
          <Search findByLocation={findByLocation}/>
        </Route>
        <Route path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            return (
              <Details 
                id={id}
              />
            );
          }}></Route>
        {/* error handling! */}
      </Switch>
    </section>
  );
}

export default App;
