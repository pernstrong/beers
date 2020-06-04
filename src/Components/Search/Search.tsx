import React, { useState } from 'react'
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
                <button onClick={handleClick}>Search</button>
            </section>
        </section>
    )
}

export default Search