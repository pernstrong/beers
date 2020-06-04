export const fetchBreweriesByLocation = async (location: string) => {
    console.log(location)
    const url = `https://api.openbrewerydb.org/breweries?by_postal=${location}`
    return await fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error))
}