import React, { useState, useContext, useEffect } from 'react'
import './ResultCard.css'
import { Brewery } from '../../types'
import { Link } from 'react-router-dom'
import RatingContext from '../../RatingContext'

interface Props {
    result: Brewery
    key: number
    toggleFavorite: (id: Number) => void
}

const ResultCard = (props: Props) => {
    const { result } = props
    const link = `/${props.result.id}/${props.result.name.replace(/\s/g, "+")}`;
    const [ rating, updateRating ] = useState('')
    const [ isFavorite, updateIsFavorite ] = useState(false)

    const formatZip = (num: string) => {
        return num.split('-')[0]
    }
    
    const handleClick = () => {
        props.toggleFavorite(result.id)
        updateIsFavorite(!isFavorite)
    }

    useEffect(() => {
        const rating = localStorage.getItem(`rating-${props.result.id}`);
        if (rating) {
          updateRating(JSON.parse(rating));
        }
      }, [props.result.id]);

    useEffect(() => {
      const favorites = localStorage.getItem("favorites");
      if (favorites !== null && favorites.includes(props.result.id.toString())) {
        updateIsFavorite(true);
      }
    }, [props.result.id]);

    const buttonClass = () => {
        return (isFavorite ? "is-favorite-active" : "is-favorite")
    }

    return (
        <section className="result-card">
            <h3>{result.name}</h3>
            <p className="brewery-type">type: {result.brewery_type}</p>
            <p>{result.street}</p>
            <p>{result.city}, {result.state} {formatZip(result.postal_code)}</p>
            {/* <RatingContext.Consumer > */}
                <p>My Rating: {rating}</p>
            {/* </RatingContext.Consumer> */}
            {/* <p>{formatPhone(result.phone)}</p> */}
            {/* <a href={`${result.website_url}`}>Website</a> */}
            <section className="result-card-button-section">
                <Link to={link}>
                    <button>Details/Notes</button>
                </Link>
                <button onClick={handleClick} className={buttonClass()}>Fav</button>
            </section>

        </section>
    )
}

export default ResultCard