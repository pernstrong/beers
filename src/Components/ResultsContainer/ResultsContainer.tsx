import React from 'react'
import './ResultsContainer.css'
import { Brewery } from '../../types'
import ResultCard from '../ResultCard/ResultCard'
// import RatingContext from '../../RatingContext'

interface Props {
    results: Brewery[]
    isLoading: boolean
    toggleFavorite: (id: Number) => void
}

const ResultsContainer = (props: Props) => {

    const results = props.results.map(result => <ResultCard result={result}  key={result.id} toggleFavorite={props.toggleFavorite}/>)

    return (
        <section className="results-container">
            <h2>Results</h2>
            <section className="results-container-display">
                {props.isLoading && <p>Loading...</p>}
                    {results}
            </section>
        </section>
    )
}

export default ResultsContainer