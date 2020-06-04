import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from '../Header/Header'
import Search from '../Search/Search'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

import { fetchBreweriesByLocation } from "../../apiCalls"

const App = () => {
  const [ breweryResults, setBreweryResults ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  // start with just zip code? then include city?
  const findByLocation = async (searchInput: string) => {
    setIsLoading(true)
    const breweryList = await fetchBreweriesByLocation(searchInput)
    setBreweryResults(breweryList)
    setIsLoading(false)
  }

  return (
    <section className="App">
      <Header />
      <Switch>
        <Route path="/results">
          <ResultsContainer results={breweryResults} isLoading={isLoading}/>
        </Route>
        <Route exact path="/">
          <Search findByLocation={findByLocation}/>
        </Route>
        {/* error handling! */}
      </Switch>
    </section>
  );
}

export default App;
