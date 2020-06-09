 import React from 'react'
 import "@testing-library/jest-dom/extend-expect"
 import { render } from "@testing-library/react"
 import { MemoryRouter } from 'react-router-dom'
 import Header from "./Header"


 describe('Header', () => {
     it('should display the page title', () => {
         const { getByText } = render(<MemoryRouter><Header favoritesLength={0}/></MemoryRouter>)

         expect(getByText('Beers?')).toBeInTheDocument()
     })

     it('should have a favorites button', () => {
         const { getByText } = render(<MemoryRouter><Header favoritesLength={5}/></MemoryRouter>)

         expect(getByText('My Favorites (5)')).toBeInTheDocument()
     })
 })
