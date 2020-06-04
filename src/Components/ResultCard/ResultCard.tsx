import React from 'react'
import './ResultCard.css'
import { Brewery } from '../../types'

interface Props {
    result: Brewery
    id: number
}

const ResultCard = (props: Props) => {
    const { result } = props

    const formatPhone = (num: string) => {
        const formattedNumber: string[] = num.split('').reduce((newNumber: string[], digit, i)  => {
            (i === 2 || i === 5) ? newNumber.push(`${digit}-`) : newNumber.push(digit)
            return newNumber
        }, [])
        return formattedNumber.join('')
    }

    const formatZip = (num: string) => {
        return num.split('-')[0]
    }

    return (
        <section className="result-card">
            <h3>{result.name}</h3>
            <p className="brewery-type">type: {result.brewery_type}</p>
            <p>{result.street}</p>
            <p>{result.city}, {result.state} {formatZip(result.postal_code)}</p>
            <p>{formatPhone(result.phone)}</p>
            <a href={`${result.website_url}`}>Website</a>
            <section className="result-card-button-section">
                <button>Notes</button>
                <button>Fav</button>
            </section>

        </section>
    )
}

export default ResultCard