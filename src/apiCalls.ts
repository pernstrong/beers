export const fetchBreweriesByLocation = async (location: String) => {
    const url = `https://api.openbrewerydb.org/breweries?by_postal=${location}`
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
// export const fetchFavoritesData = async (ids: Number[]) => {
//     return ids.map(id => {
//         const url = `https://api.openbrewerydb.org/breweries/${id}`
//         return fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
//     })
// }