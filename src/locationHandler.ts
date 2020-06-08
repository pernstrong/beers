export const locationHandler = (location: String) => {
    const locationArray = location.split('')
    const digits = ['0','1', '2,', '3', '4', '5', '6', '7', '8', '9']
    let type = 'by_city'
    locationArray.forEach(locationDigit => {
        digits.forEach(digit => {
            if (digit === locationDigit) {
                type = 'by_postal'
            }
        })
    })
    return type
}