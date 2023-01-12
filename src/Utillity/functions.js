export function processData(countriesArray, options) {

    let newArray = filter(countriesArray, options)
    newArray = sort(newArray, options)

    return newArray
}

export function addComas (number) {
    number = number.toString().split('')
    let j = 1
    for(let i = number.length - 1; i > 0 ; i--) {
        if(j % 3 === 0 && j !== 0) {
            number[i] = `,${number[i]}`
        }
        j = j + 1
    }
    return number.join('')
}

function filter(array, options) {
    let regex = new RegExp(options.filterCountry.trim(), 'ig')
    if(options.filterCountry.trim() !== '') {
        array = array.filter(country => regex.test(country?.name?.common))
    }
    if(options.filterRegion !== 'all') {
        array = array.filter(country => country.region.toLowerCase() === options.filterRegion)
    }

    return array
}

function sort(array, options) {
    let criteriumPath = options.sortCriterium
    let sortDirection = options.sortDirection
    
    array = array.sort((a, b) => {
        let dataCountryA = getSortParametr(a, criteriumPath)
        let dataCountryB = getSortParametr(b, criteriumPath)
        return compare(dataCountryA, dataCountryB, sortDirection) 
    })
    return array
}

function getSortParametr(object, criteriumPath) {
    let path = criteriumPath === 'name' ? object?.name?.common : 
        criteriumPath === 'population' ? object?.population : 
        criteriumPath === 'neighbours' ? object?.borders?.length : 0
    return path ? path : 0
}

function compare(a, b, sign) {
    let result = sign === '-' ? a > b : a < b
    return result ? -1 : 1
}