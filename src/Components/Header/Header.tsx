import React from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'

interface Props {

}

const Header = () => {

    return (
        <header>
            <Link to="/" className="beers-link">
                <h1>Beers?</h1>
            </Link>
            <section className="header-button-section">
                <NavLink to="/favorites">
                  <button>My Favorites</button>
                </NavLink>
            </section>
        </header>
    )
}

export default Header