import React from 'react'
import { Brewery } from '../../types'
import ResultCard from '../ResultCard/ResultCard'

interface Props {
    results: Brewery[]
}

const ResultsContainer = (props: Props) => {

    const results = props.results.map(result => <ResultCard result={result}/>)

    return (
        <section className="results-container">
            <h3>Results</h3>
            {results}
        </section>
    )
}

export default ResultsContainer