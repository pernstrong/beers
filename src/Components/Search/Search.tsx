import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

interface Props {
    findByLocation: (searchTerm: string) => void
}

const Search = (props: Props) => {
    const [ searchInput, setSearchInput ] = useState('')
    const [ isInputValid, updateIsInputValid ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleClick = () => {
            props.findByLocation(searchInput)
            clearInput()
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    const clearInput = () => {
        setSearchInput('')
    }

    return (
        <section className="search-section">
            <img src="../../../images/flight.png" alt="flight of beers" className="background-image"/>
            <section className="search-inputs">
                <input 
                    type="text"
                    name="search"
                    // start with just zip code? then include city?
                    placeholder="search by zip code"
                    value={searchInput}
                    onChange={e => handleChange(e)}
                    // onKeyDown={e => e.key === "Enter" && handleClick()}
                />
                {/* <Link to={isInputValid ? "/results" : "/"} > */}
                <Link to="/results">
                    <button onClick={handleClick}>Search</button>
                </Link>
                <section className="zip-error-section">
                    {errorMessage.length !== 0 && <p className="zip-error-message">{errorMessage}</p>}
                </section>
            </section>
        </section>
    )
}

export default Search