import React from 'react'
import './Header.css'

interface Props {

}

const Header = () => {

    return (
        <header>
            <h1>Beers?</h1>
            <section className="header-button-section">
                <button>My Favorites</button>
            </section>
        </header>
    )
}

export default Header