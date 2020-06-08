import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import Features from "./Features"

describe('Features', () => {
    
    it('should display a Features title', () => {
        const mockSetFeature = jest.fn()
        const { getByText } = render(<Features features={[]} setFeatures={mockSetFeature} />)

        expect(getByText('Features')).toBeInTheDocument()
    })

    it('should give options for selecting features', () => {
        const mockSetFeature = jest.fn()
        const { getByText } = render(<Features features={[]} setFeatures={mockSetFeature} />)

        expect(getByText('Dog-friendly')).toBeInTheDocument()
        expect(getByText('Food Trucks')).toBeInTheDocument()
    })
    
})