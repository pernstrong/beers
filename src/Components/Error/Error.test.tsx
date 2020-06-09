import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import Error from "./Error"

describe('Error', () => {
    it('should display an error message', () => {
        const { getByText } = render(<Error />)

        expect(getByText('Error 404')).toBeInTheDocument()
        expect(getByText('Page does not exist...please try again')).toBeInTheDocument()
    })
})