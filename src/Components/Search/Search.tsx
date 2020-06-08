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

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    const clearInput = () => {
        setSearchInput('')
    }

    return (
        <section className="search-section">
            <section className="search-inputs">
                <input 
                    type="text"
                    name="search"
                    placeholder="search by zip code"
                    value={searchInput}
                    onChange={e => handleChange(e)}
                    aria-label="brewery search"
                />
                <Link to="/results">
                    <button onClick={handleClick}>Search</button>
                </Link>
            </section>
        </section>
    )
}

export default Search