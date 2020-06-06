import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

interface Props {
    findByLocation: (searchTerm: string) => void
}

const Search = (props: Props) => {
    const [ searchInput, setSearchInput ] = useState('')

    const handleClick = () => {
        props.findByLocation(searchInput)
        clearInput()
    }

    const clearInput = () => {
        setSearchInput('')
    }

    return (
        <section className="search-section">
            <img src="../../../images/flight2.png" alt="flight of beers" className="background-image"/>
            <section className="search-inputs">
                <input 
                    type="text"
                    name="search"
                    // start with just zip code? then include city?
                    placeholder="seach by zip code"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleClick()}
                />
                <Link to="/results">
                    <button onClick={handleClick}>Search</button>
                </Link>
            </section>
        </section>
    )
}

export default Search