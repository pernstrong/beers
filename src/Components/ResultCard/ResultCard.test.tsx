import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import ResultCard from "./ResultCard"

describe('ResultCard', () => {
    it.skip('should display the brewery name', () => {
        const { getByText } = render(<ResultCard />)
    })
    
    it.skip('should display the brewery street address', () => {
        const { getByText } = render(<ResultCard />)
    })
    
    it.skip('should display the phone number', () => {
        const { getByText } = render(<ResultCard />)
    })
    
    it.skip('should display the website link', () => {
        const { getByText } = render(<ResultCard />)
    })
    it.skip('should call the toggleFavorites method when the favorite button is clicked', () => {
        const { getByText } = render(<ResultCard />)
    })
})