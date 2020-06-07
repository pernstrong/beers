import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import NotesDisplay from "./NotesDisplay"
import { testNote } from '../../testData'

describe('NotesDisplay', () => {
    it('should display a beer title', () => {
        const { getByText } = render(<NotesDisplay notes={[testNote]} deleteNote={() => null}/>)

        expect(getByText('Pomona\'s Art')).toBeInTheDocument()
    })

    it('should display the note', () => {
        const { getByText } = render(<NotesDisplay notes={[testNote]} deleteNote={() => null}/>)

        expect(getByText('delicious')).toBeInTheDocument()
    })
})