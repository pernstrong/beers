import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import ResultsContainer from "./ResultsContainer"

describe('ResultsContainer', () => {
    it.skip('should display a results title', () => {
        const { getByText } = render(<ResultsContainer />)
    })
    
    it.skip('should display some brewery results', () => {
        const { getByText } = render(<ResultsContainer />)
        
    })
})