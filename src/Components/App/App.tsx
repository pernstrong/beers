import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Header from '../Header/Header'
import Search from '../Search/Search'
import ResultsContainer from '../ResultsContainer/ResultsContainer'

import { fetchBreweriesByLocation } from "../../apiCalls"

const App = () => {
  const [ breweryResults, setBreweryResults ] = useState([])

  // start with just zip code? then include city?
  const findByLocation = async (searchInput: string) => {
    const breweryList = await fetchBreweriesByLocation(searchInput)
    setBreweryResults(breweryList)
  }

  return (
    <section className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Search findByLocation={findByLocation}/>
        </Route>
        <Route path="/results">
          <ResultsContainer results={breweryResults}/>
        </Route>
        {/* error handling! */}
      </Switch>
    </section>
  );
}

export default App;
