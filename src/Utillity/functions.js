export function sortAndFilter(countriesArray, options) {

    let regex = new RegExp(options.filterCountry, 'ig')
    let newArray = [...countriesArray]
    if(options.filterCountry !== '') {
        newArray = newArray.filter(country => regex.test(country?.name?.common) )
    }
    if(options.filterRegion !== 'all') {
        newArray = newArray.filter(country => country.region.toLowerCase() === options.filterRegion)
    }

    return newArray

}