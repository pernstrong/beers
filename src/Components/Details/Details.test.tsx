import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Details from "./Details"
import { testData } from '../../testData'

// need to mock out the api call...
describe('Details', () => { 
    it.skip('should give basic info on the brewery', () => {
        const { getByText } = render(<Details id={1}/>)
    })
})