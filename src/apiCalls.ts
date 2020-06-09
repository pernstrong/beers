import { locationHandler } from './locationHandler'

export const fetchBreweriesByLocation = async (location: String) => {
    const searchType = locationHandler(location)
        const url = `https://api.openbrewerydb.org/breweries?${searchType}=${location}&per_page=50`
        return await fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error))
}

export const fetchBreweryById = async (id: Number) => {
    const url = `https://api.openbrewerydb.org/breweries/${id}`
    return await fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .catch(error => console.error(error))
}
