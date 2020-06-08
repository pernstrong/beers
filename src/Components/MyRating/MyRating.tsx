import React from 'react'
import './MyRating.css'

interface Props {
    setRating: (rating: string) => void
    rating: String
}

const MyRating = (props: Props) => {

    return (
        <section className="my-rating">
            <label htmlFor="my-rating">My Rating: {props.rating ? props.rating : 'no rating'}</label>
            <p>Update Rating</p>
            <select name="my-rating" id="my-rating" onChange={e => props.setRating(e.target.value)}>
                <option value=''></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </section>
    )
}

export default MyRating