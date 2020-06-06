import React, { useState, useEffect } from 'react'
import { fetchBreweryById } from '../../apiCalls'
import { Brewery } from '../../types'

import Notes from '../Notes/Notes'


interface Props {
    id: Number
}

const Details = (props: Props) => {
    const [ breweryArray, setBrewery ] = useState<Brewery[]>([])
    const brewery = breweryArray[0]

    useEffect(() => {
        async function fetchBreweryData() {
         const data: any =  await Promise.all([fetchBreweryById(props.id)])
         setBrewery(data)
      } 
      fetchBreweryData()
     }, [props.id])

     const formatPhone = (num: string) => {
        const formattedNumber: string[] = num.split('').reduce((newNumber: string[], digit, i)  => {
            (i === 2 || i === 5) ? newNumber.push(`${digit}-`) : newNumber.push(digit)
            return newNumber
        }, [])
        return formattedNumber.join('')
    }

    if (breweryArray.length === 0) {
        return (
            <h3>Loading...</h3>
        )
    } else {
        return (
            <section>
                <h3>{brewery.name}</h3>
                <p className="brewery-type">type: {brewery.brewery_type}</p>
                <p>{brewery.street} {brewery.city}, {brewery.state}</p>
                <h4>Contact</h4>
                <p>{formatPhone(brewery.phone)}</p>
                <a href={`${brewery.website_url}`}>{brewery.name} Website</a>

                
                <Notes id={brewery.id}/>
            </section>
        )
    }
}
export default Details