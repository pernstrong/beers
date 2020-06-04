import React from 'react'
import { Brewery } from '../../types'

interface Props {
    result: Brewery
}

const ResultCard = (props: Props) => {
    const { result } = props

    const formatPhone = (number: string) => {
        const formattedNumber = number.split('').reduce((newNumber, digit, i) => {
            
            return newNumber
        }, '')
    }

    return (
        <section className="result-card">
            <h3>{result.name}</h3>
            <p>{result.street} - {result.city}, {result.state} {result.postal_code}</p>
            <a href={`${result.website_url}`}>Website</a>

        </section>
    )
}

export default ResultCard