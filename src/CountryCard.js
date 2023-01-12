import { addComas } from './Utillity/functions'
import { ThemeContext } from './Theme'
import { useContext, forwardRef } from 'react'

const CountryCard = forwardRef(function CountryCard({country, setDetailsPage, setDetailedCountry}, reference) {
    
    const { theme } = useContext(ThemeContext)

    const setDetailsPageClick = () => {
        setDetailedCountry(country)
        setDetailsPage(true)
    }


    return(
        <div 
            ref={reference}
            className="country-card country-button" 
            onClick={setDetailsPageClick}
        >
            <div className="image-container">
            <img className="flag-image" src={country.flags.svg} alt='flag'></img>
            </div>
            <div className="brief-info clr-white line-15 bkg-elements" style={{backgroundColor: theme.backgroundElements, color:theme.color}}>
                <h3 className="header-country | f-w-800">{country.name.common}</h3>
                <p className="f-s-14"><span className="f-w-600">Population: </span>{country.population && addComas(country.population)}</p>
                <p className="f-s-14"><span className="f-w-600">Region: </span>{country.region}</p>
                <p className="f-s-14"><span className="f-w-600">Capital: </span>{country.capital?.[0]}</p>
                <p className="f-s-14"><span className="f-w-600">Neighbours: </span>{country?.borders?.length > 0 ? country?.borders?.length : '0 / nd'}</p>
            </div>
        </div>
    )
})

export default CountryCard