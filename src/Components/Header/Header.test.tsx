 import React from 'react'
 import "@testing-library/jest-dom/extend-expect"
 import { render, fireEvent } from "@testing-library/react"
 import { MemoryRouter } from 'react-router-dom'
 import Header from "./Header"


 describe('Header', () => {
     it('should display the page title', () => {
         const { getByText } = render(<MemoryRouter><Header /></MemoryRouter>)

         expect(getByText('Beers?')).toBeInTheDocument()
     })

     it('should have a favorites button', () => {
         const { getByText } = render(<MemoryRouter><Header /></MemoryRouter>)

         expect(getByText('My Favorites')).toBeInTheDocument()
     })
 })
