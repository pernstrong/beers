import React from 'react'
import './ResultsContainer.css'
import { Brewery } from '../../types'
import { Link } from 'react-router-dom'
import ResultCard from '../ResultCard/ResultCard'

interface Props {
    results: Brewery[]
    isLoading: boolean
    searchInput: String
    toggleFavorite: (id: Number) => void
}

const ResultsContainer = (props: Props) => {

    const results = props.results.map(result => <ResultCard result={result}  key={result.id} toggleFavorite={props.toggleFavorite}/>)

    return (
        <section className="results-container">
            {results.length > 0 ? <h2>{results.length} result(s) for "{props.searchInput}"</h2> : <h2>No breweries found for {props.searchInput}</h2>}
            <section className="results-container-display">
                {props.isLoading && <p>Loading...</p>}
                {props.results.length === 0 && <Link to="/"><button className="results-back-button">Back to Search</button></Link>}
                {results}
            </section>
        </section>
    )
}

export default ResultsContainer